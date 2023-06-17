const insertTime = () => {
  const minutes = Math.floor(time / 60) > 9 ? Math.floor(time / 60) : "0" + Math.floor(time / 60);
  const seconds = time % 60 > 9 ? time % 60 : "0" + time % 60;
  const timeText = `${minutes}:${seconds}`;

  const message = (mode === "promo" ? (curPromo || config.defaultPromo) : config.restPromo);

  timer.innerText = timeText;
  document.title = `${timeText} - ${message}`;
  curPromoName.innerText = message;
}

const setTime = () => {
  time = (savedSettings ? savedSettings[mode].time : config[mode].time) * 60;
  insertTime();
}

const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  mode = themeName.split(['-'])[0];
  document.documentElement.className = themeName;
}

const toggleTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'short-theme') {
    setTheme('short-theme');
  } else if (storedTheme === 'long-theme') {
    setTheme('long-theme');
  } else {
    setTheme('promo-theme');
  }
}

const togglers = document.querySelectorAll("#togglers .button");

const resetActive = () => {
  togglers.forEach(toggler => {
    if (mode === toggler.id) {
      toggler.classList.add("active");
    } else {
      toggler.classList.remove("active");
    }
  })
}

togglers.forEach(toggler => {
  toggler.onclick = () => {
    setTheme(toggler.id + "-theme");
    resetActive();
    setTime();
    if (toggler.id !== "promo") {
      localStorage.setItem("rest", toggler.id);
      lastRestMode = toggler.id;
    }
  }
})

function saveSettings() {
  const settings = {
    "promo": {
      "time": Math.min(promodoroTime.value ? Math.max(Math.floor(promodoroTime.value), 1) : 1, 999),
    },
    "short": {
      "time": Math.min(shortTime.value ? Math.max(Math.floor(shortTime.value), 1) : 1, 999),
    },
    "long": {
      "time": Math.min(longTime.value ? Math.max(Math.floor(longTime.value), 1) : 1, 999),
    },
  }

  localStorage.setItem("settings", JSON.stringify(settings));
  savedSettings = settings;
  hideMenu();
  setTime();
}

const resetMode = () => {
  toggleTheme();
  resetActive();
  setTime();
}

resetMode();