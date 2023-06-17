const app = () => {
  curPromoCount.innerText = count;
  // Timer
  const showStart = () => {
    pauseContainer.style.display = "none";
    startBtn.style.display = "block";
  }

  const hideStart = () => {
    startBtn.style.display = "none";
    pauseContainer.style.display = "block";
  }

  function clearTimeInterval() {
    const theme = (mode === "promo" ? (lastRestMode ? lastRestMode : config.rest) : "promo") + "-theme";
    if (mode === "promo") {
      count = count ? count + 1 : 1;
      curPromoCount.innerText = count;

      if (curPromoId != null) {
        addCurrCount(curPromoId);
      }
    }
    setTheme(theme);
    resetMode();
    clearInterval(timeInterval);
    showStart();
  }

  function setTimerInterval() {
    timeInterval = setInterval(() => {
      time -= 1;
      insertTime();
      if (time === 0) {
        clearTimeInterval();
      }
    }, 1000);
  }

  startBtn.onclick = () => {
    setTimerInterval();
    hideStart();
  }

  pauseBtn.onclick = () => {
    clearInterval(timeInterval);
    showStart();
  }

  skipBtn.onclick = () => {
    clearTimeInterval();
  }

  generateTasks();
}

app();

function clearPromoCount(e) {
  e.preventDefault();

  if (confirm("Do you want to refresh the pomodoro count?") === true) {
    count = 0;
    curPromoCount.innerText = count;
  }
}

window.onbeforeunload = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
  localStorage.setItem("count", count);
};
