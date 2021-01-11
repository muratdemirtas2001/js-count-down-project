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
const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on  ${weekday} ,${date} ${month} ${year} ${hours}:${minutes}`;

//future date in miliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(seconds);
  const values = [days, hours, minutes, seconds];
  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });
};
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
