// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
function button() {
  alert("It is 18 degrees");
}
let buttonListener = document.querySelector("button");
buttonListener.addEventListener("click", button);
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
function buttons(event) {
  event.target.textContent = "18 degrees";
}

let buttonListeners = document.querySelector("button");
buttonListeners.addEventListener("click", buttons);
