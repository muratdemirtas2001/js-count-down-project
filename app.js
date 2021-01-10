const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 1, 22, 17, 30, 0);
// console.log(typeof futureDate);
// console.log(futureDate);
const year = futureDate.getFullYear();
// console.log(year);
// console.log(typeof year);
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(month);
month = months[month];
// console.log(month);

giveaway.textContent = `giveaway ends on ${month} ${year} ${hours}:${minutes}`;
