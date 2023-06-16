let savedSettings = localStorage.getItem("settings");
let lastRestMode = localStorage.getItem("rest");
let savedTasks = localStorage.getItem("tasks");
let time;
let mode = 'promo';
let timeInterval;
let curPromo;
let tasks = savedTasks ? savedTasks : [
  {
    active: true,
    completed: false,
    task: "Cleaning",
  },
  {
    active: false,
    completed: false,
    task: "Dishes",
  }
];