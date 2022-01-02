var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineJoin = 'bevel';

var line,
    lines = [],
    gap = size / 7;

for(var y = gap / 2; y <= size; y+= gap) {
  line = [];
  for (var x = gap / 2; x <= size; x+= gap) {
    line.push({x: x, y: y});
    context.beginPath();
    context.arc(x, y, 1, 0, 2 * Math.PI, true);
    context.fill();
  }
  lines.push(line);
}