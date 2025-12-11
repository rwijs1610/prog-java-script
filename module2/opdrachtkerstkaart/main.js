//800, 600
const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Random number between 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function house(xPos, yPos, width, height, color,) {
  g.fillStyle = color;
  g.beginPath();
  g.fillRect(xPos, yPos, width, height);
  g.moveTo(xPos - 5, yPos);
  g.lineTo(xPos + width / 2, yPos - height / 2);
  g.lineTo(xPos + width + 5, yPos);
  g.closePath();
  g.fill();
}
function tree(xPos, yPos, width, height, colorbush, colortrunk) {
  g.fillStyle = colorbush;
  g.strokeStyle = colorbush;
  g.beginPath();
  g.moveTo(xPos - 5, yPos);
  g.lineTo(xPos + width / 2, yPos - height / 2);
  g.lineTo(xPos + width + 5, yPos);
  g.moveTo(xPos - 5, yPos - 60);
  g.lineTo(xPos + width / 2, yPos - 60 - height / 2);
  g.lineTo(xPos + width + 5, yPos - 60);
  g.moveTo(xPos - 5, yPos - 120);
  g.lineTo(xPos + width / 2, yPos - 120 - height / 2);
  g.lineTo(xPos + width + 5, yPos - 120);
  g.closePath();
  g.fill();
  g.stroke();
  g.fillStyle = colortrunk
  g.beginPath();
  g.fillRect(xPos + width / 2 - (width / 3 / 2), yPos, width / 3, height / 3);
  g.closePath();
  g.stroke();
}
function star(xPos, yPos, radius, color) {
  g.fillStyle = color;
  g.beginPath();
  for (let i = 0; i < 5; i++) {
    g.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * radius + xPos,
      -Math.sin((18 + i * 72) / 180 * Math.PI) * radius + yPos);
    g.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * (radius / 2) + xPos,
      -Math.sin((54 + i * 72) / 180 * Math.PI) * (radius / 2) + yPos);
  }
  g.closePath();
  g.fill();
}
function ball(xPos, yPos, radius, color) {
  g.fillStyle = color;
  g.beginPath();
  g.arc(xPos, yPos, radius, 0, Math.PI * 2);
  g.closePath();
  g.fill();
}

tree(225, 400, 200, 300, "rgba(0, 153, 51, 1)", "rgba(102, 51, 0, 1)");
star(325, 120, 30, "rgba(255, 223, 0, 1)");
ball(325, 290, 15, getRandomRgbColor()); // 1
ball(350, 350, 15, getRandomRgbColor()); // 2
ball(260, 248, 15, getRandomRgbColor()); // 3
ball(400, 250, 15, getRandomRgbColor()); // 4
ball(300, 390, 15, getRandomRgbColor()); // 5
ball(375, 380, 15, getRandomRgbColor()); // 6
ball(290, 320, 15, getRandomRgbColor()); // 7
ball(330, 220, 15, getRandomRgbColor()); // 8
house(150, 400, 50, 50, "rgba(84, 21, 202, 1)");
house(450, 400, 50, 50, "rgba(212, 209, 56, 1)");
house(200, 600, 50, 50, "rgba(212, 56, 134, 1)");
house(400, 600, 50, 50, "rgba(212, 56, 204, 1)",);