var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var randomNumber = Math.floor(Math.random() * ((-10 - 10)+ 1) + 10);


// var drawBackground = function() {
// 	var img = new Image();
// 	img.onload = function() {
// 		ctx.drawImage(img, 0, 0);
// 	};
// 	img.src = "./images/bad_news_stadium.png"
// }
// drawBackground ();

var ball = {
	position: {x:500, y:300},
	direction: "pitch",
	move: function(){
 //move the ball down the Y axis
 		if (ball.direction === "pitch"){
 			ball.position.y += 5;
 		} else if (ball.direction === "hit"){
 			ball.position.y -= 5;
 			ball.position.x += randomNumber;
 			console.log(randomNumber);
  		}	
	},
	draw: function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.arc(ball.position.x, ball.position.y, 5, 0, Math.PI*2);
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

document.addEventListener("keydown", function(){
 	var key = event.which;
 		if (key === 32){
 			ball.direction = "hit"
 			ball.draw();
			ball.move();
 		} else {

 		}
 })