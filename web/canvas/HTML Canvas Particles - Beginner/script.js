const $canvas = document.querySelector('#canvas1');
const ctx = $canvas.getContext('2d');
$canvas.width = window.innerWidth;
$canvas.height = window.innerHeight;
const numberOfParticles = 120;
let particlesArray = [];

// measure title element
const $titleElement = document.querySelector('#title1');
let titleMeasurements = $titleElement.getBoundingClientRect();

console.log(titleMeasurements);

let title = {
  x: titleMeasurements.left,
  y: titleMeasurements.top,
  width: titleMeasurements.width,
  height: titleMeasurements.height,
};

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 12 + 5;
    this.weight = Math.random() * 2 | 4 + 1;
    this.directionX = Math.random() * -4 | 1 + 1;
    this.color = `hsl(${Math.random() * 359 + 1}, 100%, 50%)`;
  }

  update() {
    if (this.y > $canvas.height) {
      this.y = 0 - this.size;
      this.weight = Math.random() * 2 | 4 + 1;
      this.x = Math.random() * $canvas.width * 1.9;
    }
    this.weight += 0.05;
    this.y += this.weight;
    this.x += this.directionX;

    // check for collision between each particle and title element
    if (
      this.x < title.x + title.width &&
      this.x + this.size > title.x &&
      this.y < title.y + title.height &&
      this.y + this.size > title.y
    ) {
      this.y -= 2;
      this.weight *= -.6;
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * $canvas.width;
    const y = Math.random() * $canvas.height;
    particlesArray.push(new Particle(x, y));
  }
}

init();

function animate() {
  ctx.fillStyle = 'rgba(255,255,255, 0.6';
  ctx.fillRect(0, 0, $canvas.width, $canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  ctx.fillRect(title.x, title.y, title.width, title.height)
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function () {
  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;
  titleMeasurements = $titleElement.getBoundingClientRect();
  title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10,
  };
  init();
});
