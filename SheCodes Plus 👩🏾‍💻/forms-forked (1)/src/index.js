//challenge 1
function button() {
  alert("Hooray!!😄");
}
let buttonListener = document.querySelector("button");
buttonListener.addEventListener("click", button);

//Challenge 2
document
  .getElementById("password-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let passwordValue = document.getElementById("password-input").value;
    alert("your password is " + passwordValue);
  });

//Challenge 3
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let emailValue = document.getElementById("email-input").value;
    let usernameValue = document.getElementById("username-input").value;
    alert("email entered: " + emailValue);
    alert("username entered: " + usernameValue);
  });
