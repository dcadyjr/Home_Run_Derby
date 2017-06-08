var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var randomNumber = Math.floor(Math.random() * ((-10 - 10)+ 1) + 10);
var homeRun = 0;

// var drawBackground = function() {
// 	var img = new Image();
// 	img.onload = function() {
// 		ctx.drawImage(img, 0, 0);
// 	};
// 	img.src = "./images/bad_news_stadium.png"
// }
// drawBackground ();

var ball = {
	position: {x:600, y:570},
	direction: "pitch",
	move: function(){
 //move the ball down the Y axis
 		if (ball.direction === "pitch"){
 			ball.position.y += 1;
 		} else if (ball.direction === "hit"){
 			ball.position.y -= 5;
 			ball.position.x += randomNumber;
 			console.log(randomNumber);
  		}	
	},
	draw: function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.fillStyle = 'white';
		ctx.arc(ball.position.x, ball.position.y, 3, 0, Math.PI*2);
		ctx.fill();

	},

}

var animateCanvas = function(){
 
    ball.move();
  	ball.draw();

  	window.requestAnimationFrame(animateCanvas);
}
animateCanvas();
  // && ball.position.y >= 635
document.addEventListener("keydown", function(){
 	var key = event.which;
 		if (key === 72 && ball.position.y >= 640 && ball.position.y <= 645) {
 			console.log(ball.position.y);
 			ball.direction = "hit";
 			ball.draw();
			ball.move();
			homeRun++
			console.log(homeRun);
 		} else if (key === 72) {
 			
 		} else if (key === 72) {
 			console.log(ball.position.y);
 		}
 })