const btn = document.getElementById("myBtn");
btn.addEventListener('click',click_add);
let x = 0
let disp = document.getElementById("display")

function click_add() 
{
  disp.textContent=++x;
}
