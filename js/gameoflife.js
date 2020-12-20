var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var lineth = 2;
var cellsize = 10;

document.write(canvas.width/cellsize);

function drawLine(x,y,dx,dy, color) {
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(dx, dy);
  context.fillStyle = color;
  context.stroke();
  context.closePath();
}

function drawGrid() {
  for (var x = 0; x < canvas.width/cellsize; x++) {
    for (var y = 0; y < canvas.height/cellsize; x++) {
      drawLine(x,y,canvas.width,canvas.height,"green");
    }

  }

}
drawGrid()
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height)

}
