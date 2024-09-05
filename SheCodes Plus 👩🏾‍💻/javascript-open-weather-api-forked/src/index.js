//Challenge 2

let apiKey = "0fd2f6d04c480da7a695db3eo9b870t6";

//Challenge 3
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=0fd2f6d04c480da7a695db3eo9b870t6&units=metric`;
function getApi(response) {
  console.log(response.data);
}
axios.get(apiUrl).then(getApi);

//Challenge 4
let apiUrls = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=0fd2f6d04c480da7a695db3eo9b870t6`;
function gettApi(response) {
  console.log(response.data.temperature.current);
}
axios.get(apiUrls).then(gettApi);

//Challenge 5
function display(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature}℃ in ${city}`;
}

let city = "Sydney";
let Apikey = "0fd2f6d04c480da7a695db3eo9b870t6";
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${Apikey}`;
axios.get(url).then(display);
