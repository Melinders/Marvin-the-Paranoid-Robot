//initialize global vars
var marvin ;
var buttonState = "start";
var animation;
var pos = 0;

//create marvin var on load
window.onload = function() {
	marvin = document.getElementById("animateMarvin");
}

//onclick function if button says stop, fcn stop; else (if button says start), fcn start
startStop = function() {
	if (buttonState == "stop") {
		stopMove();
	} else { 
		startMove();
	} 
}
	
//when start button is clicked		
function startMove() {
	//the Start button shall become a Stop button
	document.getElementById("button").innerHTML = "Stop";
	//change buttonState for onclick function
	buttonState = "stop"; 	                        
	animation = setInterval(frame, 5); 
	function frame() {
        //if Marvin exits on right
        if (pos == window.innerWidth) {
            //it shall re-enter from the left
            pos = 0;
        } else {
        	//move one pixel to the right and 1 to var pos
            pos++; 
            marvin.style.left = pos + 'px'; 
        }
    }
}

//when stop button is clicked
function stopMove() {
	//robot shall stop moving -> end frame() function
	clearInterval(animation);
	//stop button shall become a start button
	document.getElementById("button").innerHTML = "Start";
	//change buttonState for onclick function
	buttonState = "start";
}