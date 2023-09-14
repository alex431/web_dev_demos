// Get a reference to the button element with the id "myBtn"
const btn = document.getElementById("myBtn");

// Add a click event listener to the button and call the "click_add" function when clicked
btn.addEventListener('click',click_add);

// Initialize a variable "x" to store a count
let x = 0

// Get a reference to the element with the id "display"
let disp = document.getElementById("display")

// Function that increments the count "x" and updates the display
function click_add() 
{
  // Increase the value of "x" by 1 and display it in the "disp" element
  disp.textContent=++x;
}
