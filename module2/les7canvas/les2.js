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

for (let i = 0; i < 500; i++) {
    Ball(Math.random() * 1200, Math.random() * 1600, Math.random() * 25 + 25, getRandomRgbColor());
}
// function getRandomPosition() {
//     const x = Math.random() * 1200; // Random number between 0-1200
//     const y = Math.random() * 1600;
//     const position = `${x}, ${y}`;
//     return position;
// }