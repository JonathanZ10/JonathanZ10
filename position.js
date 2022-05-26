var x = 100;
var y = 150;

function pos(dx, dy) {
  if (!document.getElementByID) return;
  x += 30 * dx;
  y += 30 * dy;
  var obj = document.getElementByID("square");
  obj.style.top = y + "px";
  obj.style.left = x + "px";
}

function hideSquare() {
  if (!document.getElementByID) return;
  var obj = document.getElementByID("square");
  obj.style.display = "none";
}

function showSquare() {
  if (!document.getElementByID) return;
  var obj = document.getElementByID("square");
  obj.style.display = "block";
}