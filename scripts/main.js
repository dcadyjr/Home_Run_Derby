var canvas = document.getElementById("myCanvas");//gets the canvas element that I made on the html
var ctx = canvas.getContext("2d");//sets the canvas to 2d mode
var randomNumber = Math.floor(Math.random() * ((-10 - 10)+ 1) + 10);//variable holds a random number between -10 and 10. used below to randomize the direction of hits
var homeRun = 0;//varialbe to hold the number of homeruns for the player
var totalOuts = 0;//variable to hold the total number of outs for the player
var randomNumberY = Math.floor(Math.random() * ((400 - 550) +1) + 550);//variable that holds a random number between 400 and 550. used belwo to randomize the depth of "out" hits.

var newPitch = function (){//starts a function that make a new pitch happen after each hit.  used below in the move function
	
	ball.position.x = 600;//sets the position of the ball on the x axis to 600
  	ball.position.y = 570;//sets the postiion of the ball on the y axis to 570

  	ball.direction = "pitch";//changes the value of the direction property in the ball object to pitch
}

var ball = {//variable ball that holds that is an object with properties for the baseball.
	position: {x:600, y:570},//holds the x and y coordinates of the ball. starts at x600 and y500
	direction: "pitch",//denotes what the ball is doing.  different states make the ball do different things
	move: function() {//start of the funtion that is responsible for the movement of the ball.
 		if (ball.direction === "pitch") {//condition statement that checks if the direction of the ball is "pitch".
 				ball.position.y += 1;//moves the ball position by 1 pixel down the y axis as long as ball direction is pitch
 		} else if (ball.direction === "HR") {//condition statement that checks if the direction of the ball is HR(home run)
 				ball.position.y -= 5;//moves the ball position by 5 pixels up the y axis as long as direction is HR
 				ball.position.x += randomNumber;//moves the ball by a random number between -10 and 10 across the x axis. this randomizes which side of the field the ball is hit to.
  		} else if (ball.direction === "out") {//conditional statement to check if the direction of the ball is "out"
  				ball.position.y -= 5;//moves the position of the ball up the y axis by 5
  				ball.position.x += randomNumber;//moves the ball by a random number between -10 and 10 across the x axis. this randomizes which side of the field the ball is hit to.
  		} else if (ball.direction === "stop") {//conditional statement checks to see if the direction of the ball is "stop"
  				ball.position.y += 0;//makes the ball stop moving on the y axis
  				ball.position.x -= 0;//makes the ball stop moving on the x axis
  				// console.log(ball.direction);
  				setTimeout(newPitch, 2000);//this activates the function newPitch after 2 seconds.  new pitch starts the next pitch in the game
  		} else if (ball.direction === "strike"){//conditional statement checks to see if the ball direction is strike

  				setTimeout(newPitch, 2000);//this activates the function newPitch after 2 seconds.  new pitch starts the next pitch in the game
  			}

  		if (ball.position.y > 646) {//checks to see if the position of the ball on the y axis is greater than 646

  				ball.direction = "stop";//changes the ball direction to stop
				ball.position.x = 600;//sets the x position of the ball to 600
				ball.position.y = 570;//sets the y position of the ball to 570
				totalOuts = totalOuts += 1;//increases the total outs by 1
				console.log("strike looking",  "out #" + totalOuts);
  		}	
  			// console.log(ball.direction, ball.position.y, randomNumberY);
  		if (ball.direction === "out" && ball.position.y > (randomNumberY - 5) && ball.position.y < (randomNumberY + 5)) {//checks if the ball direction is out and if the ball postion y is greater than or less than a radnom number between 400 and 550
  				// console.log("woohoo", ball.position.y);
  				ball.direction = "stop";//changes the ball direction to stop	 				
  		}
  		if (ball.direction === "HR" && ball.position.y < 0) {//conditional statement checks to see the ball direction is HR and the y position of the ball is less than 0
  				
  				ball.direction = "stop";//changes the ball direction to stop
  				// console.log(ball.direction, ball.position.y);
  		}
	},
	draw: function(){//this function draws the ball
		ctx.clearRect(0,0,canvas.width,canvas.height);//clears the canvas
		ctx.beginPath();//gets read to draw
		ctx.fillStyle = 'white';//makdes the fill fo the ball white
		ctx.arc(ball.position.x, ball.position.y, 3, 0, Math.PI*2);//creates the circle that is the ball
		ctx.fill();//fill the circle
	},

}

var animateCanvas = function(){//function to animate the canvas
 
    ball.move();//runs the move function from the ball object
  	ball.draw();//runs the draw function from the draw object

  	window.requestAnimationFrame(animateCanvas);.//runs the animate canvas 60 fps
}
animateCanvas();//runs the animate canvas function

 
document.addEventListener("keydown", function(){//adds the event listener looking for keydown
 	var key = event.which;//variable that holds the key that is pressed
 	var swingTime = ball.position.y;//a variable that holds the position of ball position y
 		if (key === 72 && swingTime >= 642 && swingTime <= 644) {//conditional for HR. listens ff the h key is pressed while the ball is between 642 and 644 pixels
 			// console.log(swingTime);
 			ball.direction = "HR";//changes the direction property in the ball object to HR
 			ball.draw();//runs the draw function in the ball object
			ball.move();//runs the move function in the ball object
			homeRun = homeRun += 1;//adds 1 to the homerun variable which keeps tracks of how many homeruns there are.
			console.log("home run #" + homeRun);
 		} else if (key === 72 && swingTime === 640 || key === 72 && swingTime === 641 || key === 72 && swingTime === 645 || key === 72 && swingTime === 646) {//conditional for an out.  looks to see if the H key is pressed while the ball is at certain pixels.
 			ball.direction = "out";//changes the direction property in the ball object to "out"
 			ball.draw();//runs the draw function in the ball object
			ball.move();//runs the move function in the ball object
 			totalOuts = totalOuts += 1;//adds 1 to the Total outs variable which keeps track of how many outs there are
 			console.log("swinging out", "out #" + totalOuts);
 		} 	else if (key === 72 && swingTime <= 639 && swingTime > 630 || key === 72 && swingTime === 646) {//listens for the H key to be pressed while the ball is at or between certain pixels
 			ball.direction = "stop";//changes the direction in the ball object to stop
 			ball.draw();//runs the draw function in the ball object
			ball.move();//runs the move function in the ball object
			totalOuts = totalOuts += 1;//adds 1 to the total outs variable which keep track of how many outs there are.
			console.log("swingingstrike", "out #" + totalOuts);
 		}
 })
















