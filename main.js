
// Define the application entry point
function myFunction() {
    //Change here..
	alert("Functionality not available.");
    return;
}

// Start the application
// Add in arguments in MyFunction()

function FullScreenMenu(id) {
  var element = document.getElementById(id);       
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }  
}
