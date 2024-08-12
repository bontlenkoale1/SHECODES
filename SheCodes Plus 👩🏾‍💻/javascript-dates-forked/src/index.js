// challenge 1

let now = new Date();
console.log(now);

//challenge 2
let nows = new Date();
now.getMilliseconds();
console.log(nows);

//challenge 3
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = daysOfWeek[new Date().getDay()];
console.log("Today is " + currentDay);

//challenge 4
let currentYear = new Date().getFullYear();
console.log(currentYear);

//challenge 5
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonthIndex = new Date().getMonth();
let currentMonth = months[currentMonthIndex];
console.log(currentMonth);

//challenge 6
let daysOfWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthss = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentDate = new Date();

let currentDayOfWeek = daysOfWeek[currentDate.getDay()];
let currentMonths = months[currentDate.getMonth()];
let currentDayOfMonth = currentDate.getDate();
let currentYears = currentDate.getFullYear();

let formattedDate = `Today is ${currentDayOfWeek}, ${currentMonth} ${currentDayOfMonth}, ${currentYear}`;

console.log(formattedDate);

//challenge 7

function formatDate(date) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayOfWeek = daysOfWeek[date.getDay()];
  let month = months[date.getMonth()];
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

console.log(formatDate(new Date()));
