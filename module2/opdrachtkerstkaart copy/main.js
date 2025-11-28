const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function getRandomRgbColor() {
    const r = Math.random() * 255; // Random number between 0-255
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

function Ball(xPos, yPos, radius, color) {
    g.fillStyle = color;
    g.beginPath();
    g.arc(xPos, yPos, radius, 0, 2 * Math.PI);
    g.closePath();
    g.fill();
    g.stroke();
}

for (let i = 0; i < 8; i++) {
    Ball(Math.random() * 1200, Math.random() * 1600, Math.random() * 25 + 25, getRandomRgbColor());
}

// g.beginPath();
// g.arc(300, 150, 15, 0, Math.PI * 2);
// g.closePath(); // x, y, radius, startAngle, endAngle 
// g.fillStyle = getRandomRgbColor();
// g.fill();

// g.beginPath();
// g.arc(233, 248, 15, 0, Math.PI * 2);
// g.closePath(); // x, y, radius, startAngle, endAngle 
// g.fillStyle = getRandomRgbColor();
// g.fill();



