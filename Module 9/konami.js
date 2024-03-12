// An array of key strings representing the Konami code
var konamiCode = [
	"ArrowUp","ArrowUp","ArrowDown","ArrowDown",
	"ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
	"b","a"
];
console.log("Successfully imported.");
document.getElementById("dom_events").style.display = "none";

// Create a variable to keep track of where in the Code array
// the user has gotten (integer to represent array index)
let current_sequence = 0;

// Add an event listener to the 'document' object
// that calls a function on a key down event

window.addEventListener("keydown", konamiKeyHandler);

function konamiKeyHandler(event) {
	let key_pressed = event.key;
	konami(key_pressed);
}

// Write the function that gets called when a key is down
// (This is where you'll check to see if they have typed
//  the next needed key in the code and all the rest)
//
//  check to see if the character typed equals the next
//  key in the Konami code array (use the index)
//  if so, advance the index by one
//			check to see if they completed the code 
//  if not, reset the index to zero

function konami(e) {
	current_sequence = (konamiCode[current_sequence] == e) ? current_sequence + 1 : 0;
	if(current_sequence == 10) {
		window.removeEventListener("keydown", konamiKeyHandler);
		console.log("Konami Code Complete! You are Rootnami!!");
		display_answers();
	}
}

function display_answers() {
	document.getElementById("dom_events").style.display = "block";
	document.getElementById("event1").innerHTML = "<b>click</b> <br><i>When an element is clicked on, trigger a MouseEvent is triggered.</i>";
	document.getElementById("event2").innerHTML = "<b>keydown</b> <br><i>When a keyboard key is pressed down, a KeyboardEvent is triggered.</i>";
	document.getElementById("event3").innerHTML = "<b>input</b> <br><i>When an element receives input from a user, an InputEvent or an Event is triggered.</i>";
	document.getElementById("event4").innerHTML = "<b>load</b> <br><i>When an object has loaded, an UiEvent/Event is triggered.</i>";
	document.getElementById("event5").innerHTML = "<b>select</b> <br><i>When a user selects text, an UiEvent/Event is triggered.</i>";
	document.getElementById("event6").innerHTML = "<b>copy</b> <br><i>When the contents of an element are copied, a ClipboardEvent will trigger.</i>";
	document.getElementById("event7").innerHTML = "<b>resize</b> <br><i>When the documents size changes, a UiEvent/Event is triggered.</i>";
	document.getElementById("event8").innerHTML = "<b>submit</b> <br><i>When a form is submitted, an Event is triggered.</i>";

	document.getElementById("timeout_vs_interval").innerHTML = "setTimeout() executes a function after waiting a given time in milliseconds.<br>setInterval() executes a function after the given time elapses, in milliseconds."
}

// Create a timer that calls a function every second
// (for the countdown display).


// Write the function that gets called every second that
// Updates the countdown display in the HTML element
// Consider using a Date object and getting the numbers
// from there