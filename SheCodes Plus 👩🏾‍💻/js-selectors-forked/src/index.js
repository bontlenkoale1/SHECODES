// Challenge 1
// Log li with id special
let country = document.querySelector("li#special");
console.log("country");
// Challenge 2
// Log all li with class of country
let countryListItems = document.querySelectorAll("li.country");
console.log(countryListItems);
// Challenge 3
// Add class special to the li with id special
let specialListItem = document.getElementById("special");
specialListItem.classList.add("special");
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
let specialListItems = document.getElementById("special");
specialListItems.classList.add("special");
specialListItems.textContent = "South Africa";
