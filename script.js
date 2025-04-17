
function startTimer(idx) {
  let timerKey = "timer_" + idx;
  let recoveryInput = document.getElementById("recoveryTime" + idx);
  let countdown = document.getElementById("countdown" + idx);
  let container = document.getElementById("timer-container" + idx);
  let startBtn = document.getElementById("btn" + idx);
  let recoveryText = document.getElementById("recoveryText" + idx);

  if (!window.timers) window.timers = {};
  if (window.timers[timerKey]) {
    clearInterval(window.timers[timerKey]);
    countdown.innerText = recoveryInput.value;
    container.style.borderColor = "green";
    recoveryInput.style.backgroundColor = "green";
    startBtn.textContent = "Start Recupero";
    startBtn.style.backgroundColor = "green";
    window.timers[timerKey] = null;
    return;
  }

  let seconds = parseInt(recoveryInput.value, 10);
  recoveryText.innerText = "Recupero " + seconds + " secondi";
  countdown.innerText = seconds;
  container.style.borderColor = "red";
  recoveryInput.style.backgroundColor = "red";
  startBtn.textContent = "Stop Recupero";
  startBtn.style.backgroundColor = "red";

  window.timers[timerKey] = setInterval(() => {
    seconds--;
    countdown.innerText = seconds;
    if (seconds <= 0) {
      clearInterval(window.timers[timerKey]);
      countdown.innerText = recoveryInput.value;
      container.style.borderColor = "green";
      recoveryInput.style.backgroundColor = "green";
      startBtn.textContent = "Start Recupero";
      startBtn.style.backgroundColor = "green";
      playAlert();
      window.timers[timerKey] = null;
    }
  }, 1000);
}

function playAlert() {
  const audio = new Audio("beep.mp3");
  audio.play();
  if (window.navigator.vibrate) {
    window.navigator.vibrate(500);
  }
}
