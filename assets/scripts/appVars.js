let savedSettings = localStorage.getItem("settings");
let lastRestMode = localStorage.getItem("rest");
let savedTasks = JSON.parse(localStorage.getItem("tasks"));
let time;
let mode = 'promo';
let timeInterval;
let curPromo;
let tasks = savedTasks ? savedTasks : [];