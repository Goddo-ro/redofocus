const setTime = () => {
  time = (savedSettings ? savedSettings[mode].time : config[mode].time) * 60;
  const minutes = time / 60 > 9 ? time / 60 : "0" + time / 60;
  const seconds = time % 60 > 9 ? time % 60 : "0" + time % 60;
  timer.innerText = `${minutes}:${seconds}`;
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
  }
})

toggleTheme();
resetActive();
setTime();