"use-strict";

var gulp = require("gulp"),
  del = require("del"),
  mode = require("gulp-mode")({
    modes: ["prod", "dev"],
    default: "dev",
    verbose: false
  }),
  size = require("gulp-size"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  pug = require("gulp-pug"),
  imagemin = require("gulp-imagemin"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create();

/**
 * Setup source and destination paths
 */
var paths = {
  dist: "dist/",
  styles: {
    src: "src/scss/*.scss",
    dest: "dist/"
  },
  pages: {
    src: "src/*.pug",
    dest: "dist/"
  },
  javascripts: {
    src: "src/javascripts/**/*.js",
    dest: "dist/"
  },
  images: {
    src: "src/assets/images/*",
    dest: "dist/images"
  }
};

/**
 * Handle styles
 */

function style() {
  return (
    gulp
      .src(paths.styles.src)
      // initialize sourcemaps
      .pipe(mode.dev(sourcemaps.init()))
      .pipe(mode.dev(sass({ outputStyle: "expanded" })))
      .pipe(mode.prod(sass({ outputStyle: "compressed" })))
      .on("error", sass.logError)
      // postcss -> autoprefixer -> cssnano
      .pipe(mode.prod(postcss([autoprefixer(), cssnano()])))
      .pipe(mode.dev(sourcemaps.write()))
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(size({ title: "styles", showFiles: true }))
      // compile -> browsersync stream
      .pipe(mode.dev(browserSync.stream()))
  );
}

/**
 * Build html from pug files
 */
function buildHTML() {
  return gulp
    .src(paths.pages.src)
    .pipe(pug())
    .pipe(size({ title: "pages", showFiles: true }))
    .pipe(gulp.dest(paths.pages.dest))
    .pipe(mode.dev(browserSync.stream()));
}

/**
 * Runs babel
 */

function transpileJS() {
  return gulp
    .src(paths.javascripts.src)
    .pipe(mode.dev(sourcemaps.init()))
    .pipe(
      babel({
        presets: ["@babel/env"]
        //uncomment line below to add plugins
        //, plugins: ['@babel/plugin-name']
      }).pipe(gulp.dest(paths.javascripts.dest))
    )
    .pipe(concat("application.js"))
    .pipe(mode.dev(sourcemaps.write()))
    .pipe(size({ title: "scripts", showFiles: true }))
    .pipe(gulp.dest(paths.javascripts.dest))
    .pipe(mode.dev(browserSync.stream()));
}

/**
 * Minify images
 */
function minifyImages() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true, optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
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
function reload() {
  browserSync.reload();
}

/**
 * Delete files from dist folder
 */
function clean() {
  return del([paths.dist + "**"]);
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
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.pages.src, buildHTML);
  gulp.watch("dist/*", reload);
}

/**
 * Exports variables to use directly on the terminal if needed
 */
exports.watch = watch;

exports.style = style;

exports.imgmin = minifyImages;

/**
 * Checks for environments variable
 *
 * @see https://www.npmjs.com/package/gulp-mode
 *
 */

if (mode.dev()) {
  var run = gulp.parallel(style, buildHTML, transpileJS, watch);
} else if (mode.prod()) {
  var run = gulp.parallel(clean, style, buildHTML, transpileJS, minifyImages);
}

gulp.task("default", run);
