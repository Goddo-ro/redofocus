const app = () => {
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
    setTheme( theme);
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
}

app();