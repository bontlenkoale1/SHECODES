//Challenge 1

let weather = {};
console.log(weather);

//Challenge 2

let weatherObject = {
  temp: 25,
  humidity: 60,
};
console.log(weatherObject);

//Challenge 3

console.log("Temperature:", weatherObject.temp);
console.log("Humidity:", weatherObject.humidity);

//Challenge 4
let weatherObjects = {
  temp: 25,
  humidity: 60,
  windspeed: 10,
};
console.log(weatherObjects);

//Challenge 5

console.log("Temperature:", weatherObjects["temp"]);
console.log("Humidity:", weatherObjects["humidity"]);
console.log("windspeed:", weatherObjects["windspeed"]);

//Challenge 6

let forcast = [
  {
    day: "Monday",
    temp: 25,
    humidity: 55,
    windspeed: 15,
    condition: "Sunny",
  },
  {
    day: "Tuesday",
    tempt: 30,
    humidity: 60,
    windspeed: 0,
    condition: "Sunny",
  },
  {
    day: "wednesday",
    tempt: 20,
    humidity: 30,
    windspeed: 0,
    condition: "Sunny",
  },
  {
    day: "Thursday",
    tempt: 30,
    humidity: 20,
    windspeed: 0,
    condition: "Sunny",
  },
  {
    day: "Friday",
    tempt: 15,
    humidity: 20,
    windspeed: 0,
    condition: "partly cloudy",
  },
];
console.log(forcast);
