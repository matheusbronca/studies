const $ = document.querySelector.bind(document);

const $canvas = $('#canvas1'),
  ctx = $canvas.getContext('2d');

$canvas.width = window.innerWidth;
$canvas.height = window.innerHeight;

let particleArray = [];
let adjustX = 10;
let adjustY = 0;
let mainColor = 'white';

// Handle Mouse
const mouse = {
  x: null,
  y: null,
  radius: 150,
};

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

ctx.fillStyle = 'white';
ctx.font = '20px Verdana';
ctx.fillText('PARTICLES', 0, 40);
const textCoordinates = ctx.getImageData(0, 0, 400, 400);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 40 + 5;
    this.color = mainColor;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    // Calculate distance between TWO points (Pitagoras)
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx ** 2 + dy ** 2);

    // Physics here
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;


    let outColor = 'yellow';

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
      this.color = outColor;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
        this.color = mainColor;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
        this.color = mainColor;
      }
    }
  }
}

function init() {
  particleArray = [];
  for(let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for(let x = 0, x2 = textCoordinates.width; x < x2; x++){
        //   Verify opacity in canvas area
          if(textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let positionX = x + adjustX;
            let positionY = y + adjustY;
            particleArray.push(new Particle(positionX * 15, positionY * 15))
          }
      }
  }
}

init();

function animate() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  particleArray.forEach((particle) => {
    particle.draw();
    particle.update();
  });
  connectParticles();
  requestAnimationFrame(animate);
}

animate();

function connectParticles() {
    let opacityValue = 1;
    for(let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let dx = particleArray[a].x - particleArray[b].x;
            let dy = particleArray[a].y - particleArray[b].y;
            let distance = Math.sqrt(dx**2 + dy**2);

            if (distance < 40) {
                opacityValue = 1 - (distance / 50);
                lineColor = 255 - (distance);
                ctx.strokeStyle = `rgba(255,255,${lineColor}, ${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }
}
