const hamburger = document.querySelector(".hamburger")
const mynav = document.querySelector("#nav1")


hamburger.addEventListener("click", myFunction);

function myFunction() {
    mynav.classList.toggle('active');
  }

  