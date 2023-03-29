const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;

function drawLine(x1, y1, x2, y2, hue) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function hypnoticPattern(hue) {
  const gridSize = 40;
  const padding = 20;

  for (let y = padding; y < canvas.height - padding; y += gridSize) {
    for (let x = padding; x < canvas.width - padding; x += gridSize) {
      const x1 = x;
      const y1 = y;
      const x2 = (x + gridSize) % (canvas.width - padding * 2);
      const y2 = y;

      if (y % (gridSize * 2) === 0) {
        drawLine(x1, y1, x2, y2, hue);
      } else {
        drawLine(x1, y1, x2 + gridSize, y2, hue);
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hypnoticPattern(hue);

  hue += 0.5;

  requestAnimationFrame(animate);
}

animate();
