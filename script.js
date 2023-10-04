let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let format = document.getElementById("format");

let dates = new Date();

let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

let day_arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

day.textContent = day_arr[dates.getDay()];
date.textContent = dates.getDate();
month.textContent = dates.getMonth() + 1;
year.textContent = dates.getFullYear();

// ---- clock code below ------
function update_clock() {
  let time = new Date();
  let hh = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let session = "AM";
  if (hh >= 12) {
    hh = hh - 12;
    session = "PM";
  }

  hour.textContent = String(hh).padStart(2, "0");
  minute.textContent = String(min).padStart(2, "0");
  second.textContent = String(sec).padStart(2, "0");
  format.textContent = session;
}

console.log(dates.getMonth());

update_clock();
setInterval(update_clock, 1000);
