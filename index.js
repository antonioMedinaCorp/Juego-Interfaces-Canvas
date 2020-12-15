var bg = ["red", "blue", "green", "orange"];
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

function paint(){
ctx.fillStyle = bg[Math.round(Math.random()* (bg.length-1))];
ctx.fillRect(10,10,100,100);
}

(function loop(){

    paint()

    requestAnimationFrame(loop);
})();