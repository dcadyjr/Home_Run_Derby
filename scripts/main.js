var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");




var ball = {
	position: {x:500, y:300},
	direction: "",
	move: function(){
 //move the ball down the Y axis
 		ball.position.y++
 		console.log(ball.position.y);
	},
	draw: function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.arc(ball.position.x, ball.position.y, 10, 0, Math.PI*2);
		ctx.stroke();

	},

}
	ball.draw();
	ball.move();

	var animateCanvas = function(){
 
    ball.move();

  	ball.draw();
  	window.requestAnimationFrame(animateCanvas);
}
 animateCanvas();