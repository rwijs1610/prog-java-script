const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Random number between 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function getRandomPosition() {
  const x = Math.floor(Math.random() * 256); // Random number between 0-255
  const y = Math.floor(Math.random() * 256);
  return x + ', ' + y;
}
//800, 600


g.beginPath();
g.fillStyle = "#632C07";
g.fillRect(262.5, 300, 75, 100);
g.closePath();
g.stroke();

g.beginPath();
g.moveTo(175, 300); //punt 1 275
g.lineTo(300, 50); //punt 2 400
g.lineTo(425, 300); //punt 3 525
g.closePath();
g.fillStyle = "#076338";
g.fill();
g.beginPath();
g.fillStyle = "#eeff03ff";
g.moveTo(280, 60); //punt 1 275
g.lineTo(300, 15); //punt 2 400
g.lineTo(320, 60); //punt 3 525
g.closePath();
g.fill();

g.beginPath();
g.fillStyle = "#070763";
g.fillRect(50, 300, 50, 60);
g.moveTo(45, 300);
g.lineTo(75, 250);
g.lineTo(105, 300);
g.closePath();
g.fillStyle = "#070763";
g.fill();

g.beginPath();
g.fillStyle = "#580763";
g.fillRect(150, 400, 50, 60);
g.moveTo(145, 400);
g.lineTo(175, 350);
g.lineTo(205, 400);
g.fillStyle = "#580763";
g.closePath();
g.fill();

g.beginPath();
g.fillStyle = "#075763";
g.fillRect(50, 500, 50, 60);
g.moveTo(45, 500);
g.lineTo(75, 450);
g.lineTo(105, 500);
g.fillStyle = "#075763";
g.closePath();
g.fill();

g.beginPath();
g.fillStyle = "#053B05";
g.fillRect(150, 600, 50, 60);
g.fillStyle = "#053B05";
g.moveTo(145, 600);
g.lineTo(175, 550);
g.lineTo(205, 600);
g.closePath();
g.fill();

g.beginPath();
g.arc(250, 200, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(300, 150, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(233, 248, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(373, 250, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(300, 290, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(376, 283, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(309, 250, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

g.beginPath();
g.arc(289, 250, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = getRandomRgbColor();
g.fill();

