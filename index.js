const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date(document.getElementById('dateandtime').value).getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  playSound("http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg")
  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

function start(){
  setInterval(countdown, 1000);
}

function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}
// should use 500 as setInterval won't always run on time.

