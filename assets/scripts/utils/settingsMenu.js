function showMenu() {
  settingsContainer.style.display = "flex";
  promodoroTime.value = (savedSettings ? savedSettings["promo"].time : config["promo"].time);
  shortTime.value = (savedSettings ? savedSettings["short"].time : config["short"].time);
  longTime.value = (savedSettings ? savedSettings["long"].time : config["long"].time);
}

function hideMenu() {
  settingsContainer.style.display = "none";
}