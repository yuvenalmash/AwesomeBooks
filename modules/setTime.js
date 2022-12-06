import { DateTime } from "./luxon.js";
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateSuffix = (date) =>{
  if (date % 10 === 1) {
    date = `${date}st`;
  } else if (date % 10 === 2) {
    date = `${date}nd`;
  } else if (date[date.length - 1] === 3) {
    date = `${date}rd`;
  } else {
    date = `${date}th`;
  }
  return date
}

export const setTime = () => {

  const now = new Date();
  const month = months[now.getMonth()];
  let date = now.getDate();
  date = dateSuffix(date)
  const year = now.getFullYear();
  let hours = now.getHours();
  let mins = now.getMinutes();
  const sec = now.getSeconds();
  const amPm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  mins = mins < 10 ? `0${mins}` : mins;
  document.getElementById('dateDisplay').innerHTML = `${month} ${date} ${year}, ${hours}:${mins}:${sec} ${amPm}`;
};

export const setLuxonTime = () =>{
  const now = DateTime.now();
  const year = now.year
  const month = months[(now.month) - 1]
  let date = now.day
  date = dateSuffix(date)
  let hour = now.hour
  let min = now.minute
  const amPm = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  hour = hour || 12; // the hour '0' should be '12'
  min = min < 10 ? `0${min}` : min;
  const sec = now.second
  document.getElementById('dateDisplay').innerHTML = `${month} ${date} ${year}, ${hour}:${min}:${sec} ${amPm}`;
}
