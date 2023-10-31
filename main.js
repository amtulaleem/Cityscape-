// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Small Windows
ctx.fillStyle = "white";
for (let x = 40; x <= 100; x = x + 20) {
  ctx.fillRect(x, 210, 10, 10);
  for (let y = 210; y <= 350; y = y + 25) {
    ctx.fillRect(x, y, 10, 10);
  }
}

//Wide windows
for (let y = 392; y <= 600; y = y + 40) {
  ctx.fillStyle = "white";
  ctx.fillRect(20, y, 120, 20);
}
//Long windows
for (let x = 170; x < 280; x = x + 25) {
  ctx.fillStyle = "white";
  ctx.fillRect(x, 115, 10, 500);
}
