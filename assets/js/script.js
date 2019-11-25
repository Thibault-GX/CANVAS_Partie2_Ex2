var c = document.getElementById("Partie2Exercice2");
var ctx = c.getContext("2d");
// Dimensions de Partie2Exercice1 : 400px x 400px

// Fond de couleur
ctx.beginPath();
ctx.rect(0,0,400,400);
ctx.fillStyle = "blue";
ctx.fill();

//Coupole soucoupe volante
ctx.beginPath();
ctx.moveTo(125,200);
ctx.quadraticCurveTo(200,25,275,200);
ctx.fillStyle = "white";
ctx.fill();

// Soucoupe volante
ctx.beginPath(); // Débute un chemin
ctx.moveTo(50,200);
ctx.quadraticCurveTo(200,300,350,200);
ctx.moveTo(50,200);
ctx.quadraticCurveTo(200,100,350,200);
ctx.fillStyle = "lightblue";
ctx.fill();
