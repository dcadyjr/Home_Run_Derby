var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var randomNumber = Math.floor(Math.random() * ((-10 - 10)+ 1) + 10);
var homeRun = 0;
var totalOuts = 0;

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
 		} else if (ball.direction === "HR"){
 				ball.position.y -= 5;
 				ball.position.x += randomNumber;
  		}	else if (ball.direction === "out") {
  				ball.position.y -= 5;
  				ball.position.x += randomNumber;
  				// if (ball.position.y <=  )
  		}	 
  		if (ball.position.y === 646) {
  				ball.position.x = 600;
  				ball.position.y = 570;
				console.log("strike");
				totalOuts = totalOuts += 1;
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

 
document.addEventListener("keydown", function(){
 	var key = event.which;
 	var swingTime = ball.position.y;
 		if (key === 72 && swingTime >= 642 && swingTime <= 644) {
 			console.log(swingTime);
 			ball.direction = "HR";
 			ball.draw();
			ball.move();
			homeRun = homeRun += 1;
			console.log("home run #" + homeRun);
 		} else if (key === 72 && swingTime === 640 || key === 72 && swingTime === 641 || key === 72 && swingTime === 645 || key === 72 && swingTime === 646) {
 			ball.direction = "out";
 			ball.draw();
			ball.move();
 			totalOuts = totalOuts += 1;
 			console.log("out", swingTime, totalOuts);
 		} 	else if (key === 72 && swingTime <= 639 || key === 72 && swingTime > 646) {
 			ball.direction = "strike";
 			ball.draw();
			ball.move();
			totalOuts = totalOuts += 1;
			console.log("strike", swingTime);
 		}
 })