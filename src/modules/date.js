export { displayDay };
export { displayMonth };
export { getDigit };
export { displayCurrentdate };

const display = document.querySelector(".display");
const date = document.querySelector(".date");

function displayDay() {
  const today = new Date();
  const day = today.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return daylist[day];
}
function displayMonth() {
  const month = new Date();
  const monthNumber = month.getMonth();
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
    "December"
  ];
  return months[monthNumber];
}

function getDigit() {
  const date = new Date();
  const number = String(date.getDate()).padStart(2, "0");
  return number;
}

function displayCurrentdate() {
  display.textContent = displayDay();
  date.textContent = displayMonth() + " " + getDigit();
}
