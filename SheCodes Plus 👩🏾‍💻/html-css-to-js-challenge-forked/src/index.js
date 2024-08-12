function updateDateTime() {
  let now = new Date();

  let options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  let formattedDateTime = now.toLocaleDateString("en-US", options);

  let currentDetails = document.querySelector(".current-details");
  currentDetails.innerHTML = `${formattedDateTime}, moderate rain <br />
      Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;
}

updateDateTime();

//challenge 2
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
