export const setTime = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const now = new Date();
  const month = months[now.getMonth()];
  let date = now.getDate();
  if (date % 10 === 1) {
    date = `${date}st`;
  } else if (date % 10 === 2) {
    date = `${date}nd`;
  } else if (date[date.length - 1] === 3) {
    date = `${date}rd`;
  } else {
    date = `${date}th`;
  }
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
