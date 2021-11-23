// Drawing Basics

// Set up the canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// Drawing stuff using the graphics context (ctx)

// DRAW RECTANGLES
// Set the outline(stroke) and fill colors
// Use any valid CSS colors: name, rgb(), rgba(), hex #FF0033

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); // Draw an outlined rectangle

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50); // Draw a filled square

// DRAW TEXT
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 300, 100); // Filled Text

ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas!", 350, 150); // Outlined 

// DRAW LINES
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(700, 150);
ctx.lineTo(600, 100);
ctx.stroke(); // Draw the specified path

// DRAW POLYGON
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.closePath(); // Go back to start of path
ctx.fill(); // Draw the specified path

// CIRCLES
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF";

// left off at 12:30 at the second drawing vid