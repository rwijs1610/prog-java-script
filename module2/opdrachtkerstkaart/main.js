const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

//800, 600
g.beginPath();
g.fillRect(362.5, 300, 75, 100);
g.fillStyle = "brown";
g.stroke();

g.beginPath();
g.moveTo(275, 300); //punt 1
g.lineTo(400, 50); //punt 2
g.lineTo(525, 300); //punt 3
g.closePath();
g.fillStyle = "green";
g.fill();

g.beginPath();
g.arc(350, 200, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(400, 150, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(333, 248, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(473, 250, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(400, 290, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(476, 283, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(409, 250, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(389, 250, 15, 0, Math.PI * 2);
g.closePath(); // x, y, radius, startAngle, endAngle 
g.fillStyle = "blue";
g.fill();