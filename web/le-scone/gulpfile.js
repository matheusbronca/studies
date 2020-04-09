const gulp = require('gulp'),
    mode = require('gulp-mode')({
        modes: ['prod', 'dev'],
        default: 'dev',
        verbose: false
    }),
    size = require('gulp-size'),
    flatten = require('gulp-flatten'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    htmlclean = require('gulp-htmlclean'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

const paths = {
    styles: {
        src: 'src/css/**/*.scss',
        dest: 'dist/css'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images'
    },
    dist: 'dist/'
};

function buildStyles() {
    return (
        gulp
        .src(paths.styles.src)
        .pipe(mode.dev(sourcemaps.init()))
        .pipe(mode.dev(sass({ outputStyle: 'expanded' })))
        .pipe(mode.prod(sass({ outputStyle: 'compressed' })))
        .on('error', sass.logError)
        // portscss -> autoprefixer -> cssnano
        .pipe(mode.prod(postcss([autoprefixer(), cssnano()])))
        .pipe(mode.dev(sourcemaps.write()))
        .pipe(flatten())
        .pipe(mode.prod(rename({
          suffix: '.min'
        })))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(size({ title: 'styles', showfiles: true }))
        // compile -> brosersync stream
        .pipe(mode.dev(browserSync.stream()))
    );
}

function buildHtml() {
    return (
        gulp
        .src(paths.html.src)
        .pipe(inject(gulp.src('dist/**/*.js', {read: false}), {ignorePath:'/dist',addRootSlash:false}))
        .pipe(inject(gulp.src('dist/**/*.css', {read: false}), {ignorePath:'/dist',addRootSlash:false}))
        .pipe(mode.prod(htmlclean()))
        .pipe(gulp.dest(paths.html.dest))
    );
}

function buildJS() {
    return gulp
      .src(paths.js.src)
      .pipe(mode.dev(sourcemaps.init()))
      .pipe(
        babel({
          presets: ["@babel/env"]
          //uncomment line below to add plugins
          //, plugins: ['@babel/plugin-name']
        })
      )
      .pipe(mode.prod(uglify()))
      .pipe(concat("application.js"))
      .pipe(mode.prod(rename({
        suffix: '.min'
      })))
      .pipe(mode.dev(sourcemaps.write()))
      .pipe(size({ title: "scripts", showFiles: true }))
      .pipe(gulp.dest(paths.js.dest))
      .pipe(mode.dev(browserSync.stream()));
  };

/**
 * Minify images
 */
function minifyImages() {
  return gulp
    .src(paths.images.src)
    .pipe(changed(paths.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true, optimizationLevel: 3 }),
        imagemin.mozjpeg({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(size({ title: "images", showFiles: true }))
    .pipe(gulp.dest(paths.images.dest));
}

  /**
 * Reload browser
 */
function reload(done) {
    browserSync.reload();
    done();
  }
  
  /**
   * Delete files from dist folder
   */
  function clean() {
    return del([paths.dist]);
  }

  function cleanMinifys() {
    return del([paths.styles.dest, paths.js.dest]);
  }
  
  /**
   * Watch for changes
   */
  function watch() {
    browserSync.init({
      injectChanges: true,
      server: {
        baseDir: "./dist"
      }
    });
    gulp.watch(paths.styles.src, buildStyles);
    gulp.watch(paths.html.src, buildHtml);
    // gulp.watch(paths.js.src, buildJS);
    gulp.watch("dist/**/*.html", reload);
  }

/**
 * Exports variables to use directly on the terminal if needed
 */
exports.watch = watch;

exports.style = buildStyles;

exports.clean = clean;


/**
 * Checks for environments variable
 *
 * @see https://www.npmjs.com/package/gulp-mode
 *
 */

if (mode.dev()) {
    var run = gulp.series(cleanMinifys, gulp.parallel(buildJS, buildStyles), gulp.parallel(buildHtml, minifyImages, watch));
  } else if (mode.prod()) {
    var run = gulp.series(clean, gulp.parallel(buildJS, buildStyles), gulp.parallel(buildHtml, minifyImages));
  }
  
  gulp.task("default", run);