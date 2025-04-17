
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

 = () => {
  for (let i = 1; i <= 4; i++) {
    const input = document.getElementById("weight" + i);
    const saved = localStorage.getItem("weight" + i);
    if (saved) input.value = saved;
    input.addEventListener("input", () => {
      localStorage.setItem("weight" + i, input.value);
    });
  }

  const recoveryInput = document.getElementById("recoveryTime");
  const recoveryText = document.getElementById("recoveryText");
  const countdown = document.getElementById("countdown");

  const val = parseInt(recoveryInput.value, 10);
  recoveryText.innerText = "Recupero " + val + " secondi";
  countdown.innerText = val;
  recoveryInput.style.backgroundColor = "green";
  document.getElementById("timer-container").style.borderColor = "green";

  recoveryInput.addEventListener("input", () => {
    const newVal = parseInt(recoveryInput.value, 10);
    if (!isNaN(newVal)) {
      recoveryText.innerText = "Recupero " + newVal + " secondi";
      countdown.innerText = newVal;
      originalSeconds = newVal;
    }
  });

  const startBtn = document.querySelector("button");
  startBtn.style.backgroundColor = "green";
};

