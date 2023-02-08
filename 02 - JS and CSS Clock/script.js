const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHAnd = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log(hours + "" + minutes + "" + seconds);
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHAnd.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
