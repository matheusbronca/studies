const $canvas = document.querySelector('#canvas1');
const ctx = $canvas.getContext('2d');

$canvas.width = window.innerWidth;
$canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over'

let flowerModifier = 0.1;
let number = 0;
let scale = 10;

function drawFlower() {

    let angle = number * flowerModifier;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + $canvas.width / 2;
    let positionY = radius * Math.cos(angle) + $canvas.height / 2; 

  ctx.fillStyle = `hsl(${number}, 100%, 50%)`
  ctx.strokeStyle = `hsl(${number - 60}, 100%, 50%)`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number+= 1.4;
}

function animate() {
  // Draw each frame
//   ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  
  drawFlower();
  if(number > 300) {
      number = 0;
      flowerModifier += Math.random();
      ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  }
  requestAnimationFrame(animate);
}

animate();