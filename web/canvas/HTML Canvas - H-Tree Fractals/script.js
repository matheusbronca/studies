const $canvas = document.querySelector('.canvas');
const $button = document.querySelector('.generate-tree-button');

$canvas.width = window.innerWidth;
$canvas.height = window.innerHeight;

const ctx = $canvas.getContext('2d');
let curve;
let length;
window.innerWidth > 500
  ? (length = Math.floor(Math.random() * 20 + 140))
  : (length = Math.floor(Math.random() * 20 + 70));

function drawTree(
  startX,
  startY,
  firstLineLength,
  angle,
  branchWidth,
  bodyColor,
  leafColor
) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = bodyColor;
  ctx.fillStyle = leafColor;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  // ctx.lineTo(0, -firstLineLength);

  if (angle > 0) {
    ctx.bezierCurveTo(
      10,
      -firstLineLength / 2,
      10,
      -firstLineLength / 2,
      0,
      -firstLineLength
    );
  } else {
    ctx.bezierCurveTo(
      10,
      -firstLineLength / 2,
      -10,
      -firstLineLength / 2,
      0,
      -firstLineLength
    );
  }

  ctx.stroke();

  if (firstLineLength < 5) {
    // Leafs
    ctx.beginPath();
    ctx.arc(0, -firstLineLength, 12, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  curve = Math.random() * 10 + 10;

  drawTree(
    0,
    -firstLineLength,
    firstLineLength * 0.75,
    angle + curve,
    branchWidth * 0.6
  );
  drawTree(
    0,
    -firstLineLength,
    firstLineLength * 0.75,
    angle - curve,
    branchWidth * 0.6
  );

  ctx.restore();
}

drawTree(
  $canvas.width / 2,
  $canvas.height - 80,
  length,
  0,
  25,
  'brown',
  'green'
);

function generateRandomTree(deviceWidth) {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  let centerPointX = $canvas.width / 2;
  let centerPointY = $canvas.height - 80;
  let length;
  deviceWidth > 500
    ? (length = Math.floor(Math.random() * 20 + 140))
    : (length = Math.floor(Math.random() * 20 + 70));

  let angle = 0;
  let branchWidth = Math.random() * 70 + 1;
  let color1 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  let color2 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;

  drawTree(
    centerPointX,
    centerPointY,
    length,
    angle,
    branchWidth,
    color1,
    color2
  );
}

$button.addEventListener('click', () => generateRandomTree(window.innerWidth));
