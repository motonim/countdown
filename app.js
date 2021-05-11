const countdown = () => {
  const countDate = new Date('July 26, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // time in millisecond
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  console.log(textDay, textHour, textMinute, textSecond);
};

countdown();
