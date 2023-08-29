const hamburger = document.querySelector(".hamburger")
const mynav = document.querySelector("#nav1")
hamburger.addEventListener("click", myFunction);
 
function myFunction() {
    //console.log("hello world");
    mynav.classList.toggle('active')
  }

  