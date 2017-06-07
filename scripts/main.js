var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// ctx.beginPath();
// 		ctx.arc(500, 300, 10, 0, Math.PI*2);
// 		ctx.stroke();

var ball = {
	position: {x:500, y:300},
	direction: "",
	move: function(){
 //stuff to pith the ball
 		ball.position.y++
	},
	draw: function(){
		ctx.beginPath();
		ctx.arc(ball.position.x, ball.position.y, 10, 0, Math.PI*2);
		ctx.stroke();
	},

}
	ball.draw();
	ball.move();