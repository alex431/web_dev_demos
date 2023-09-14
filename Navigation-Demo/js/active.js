// Get the hamburger menu and navigation elements by their CSS selectors
const hamburger = document.querySelector(".hamburger")
const mynav = document.querySelector("#nav1")

// Add a click event listener to the hamburger menu
hamburger.addEventListener("click", myFunction);

// Function to toggle the 'active' class on the navigation element
function myFunction() {
    mynav.classList.toggle('active');
  }

  