function setCurPromoName() {
  curPromoName.innerHTML = (mode === "promo" ? (curPromo || config.defaultPromo) : config.restPromo);
}

function generateTasks() {
  let resultHTML = "";
  tasks.forEach((task, i) => {
    resultHTML += generatePromo(task, i);
    if (task.active) {
      curPromo = task.task;
      curPromoId = i;
    }
  });
  setCurPromoName();
  promoList.innerHTML = resultHTML;
}

upBtn.onclick = () => {
  const curValue = countInput.value;
  countInput.value = curValue ? Number.parseInt(curValue) + 1 : 0;
}

downBtn.onclick = () => {
  const curValue = countInput.value;
  countInput.value = Math.max(curValue ? Number.parseInt(curValue) - 1 : 0, 0);
}

function closePromoForm(id) {
  const chosenPromo = document.getElementById(`promo-${id}`);
  const form = document.getElementById(`form-${id}`);
  form.remove();
  chosenPromo.style.display = "flex";
}

function hideForm() {
  addPromoBtn.style.display = "flex";
  addPromoForm.style.display = "none";
}

function showPromoForm(id) {
  if (document.getElementById(`form-${id}`)) {
    closePromoForm(id);
    return;
  }

  const forms = document.querySelectorAll(".form");
  forms.forEach(form => {
    if (form.id === "add-promo-form") {
      if (form.style.display === "block")
        hideForm();
    } else {
      closePromoForm(form.id.split("-")[1]);
    }
  })

  const chosenPromo = document.getElementById(`promo-${id}`);
  const name = document.querySelector(`#promo-${id} p`).innerHTML;
  const count = document.querySelector(`#promo-${id} .promo-count`).innerHTML;
  const form = generatePromoForm(name, count, id);
  chosenPromo.after(form);
  form.scrollIntoView();
}

function updatePromo(id) {
  const newName = document.querySelector(`#form-${id} #task-upd`).value;
  const newCount = document.querySelector(`#form-${id} #count-input-upd`).value;

  for (let i = 0; i < tasks.length; i++) {
    if (i === id) {
      let task = tasks[i];
      task['task'] = newName;
      task['count'] = Math.min(newCount ? newCount : 1, 999);
      break;
    }
  }

  generateTasks();
}

function deletePromo(id) {
  tasks = tasks.filter((task, taskId) => {
    if (taskId === id && task.active) {
      curPromo = null;
    }
    return taskId !== id
  });
  setCurPromoName();
  generateTasks();
}

function completePromo(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (i === id) {
      tasks[i].completed = !document.getElementById(`checkbox-${id}`).checked;
      break;
    }
  }

  generateTasks();
}

function setActivePromo(e, id) {
  e.preventDefault();

  const button = document.querySelector(`#promo-${id} .button svg`)
  if (button === e.target) {
    return;
  }
  const checkItems = document.querySelectorAll(`#promo-${id} .check-item`)
  for (let item of checkItems) {
    if (item.classList.value === e.target.classList.value) {
      return;
    }
  }

  tasks.forEach((task, i) => {
    task['active'] = i === id;
  })

  generateTasks();
}

function addCurrCount(id) {
  console.log(id);
  for (let i = 0; i < tasks.length; i++) {
    if (i === id) {
      tasks[i].curCount++;
      break;
    }
  }

  generateTasks();
}

function clearAllCompletedTasks() {
  tasks = tasks.filter(task => {
    if (task.active && task.completed) {
      curPromo = null;
    }
    return !task.completed
  });
  generateTasks();
  toggleDropdown();
}

function clearAllTasks() {
  tasks = [];
  curPromo = null;
  generateTasks();
  toggleDropdown();
}

function upUpdatingPromoCount() {
  const input = document.getElementById(`count-input-upd`);
  input.value = Number.parseInt(input.value) + 1;
}

function downUpdatingPromoCount() {
  const input = document.getElementById(`count-input-upd`);
  input.value = Math.max(Number.parseInt(input.value) - 1, 0);
}

addPromoBtn.onclick = () => {
  addPromoBtn.style.display = "none";
  addPromoForm.style.display = "block";
  addPromoForm.scrollIntoView();
}

addFormCancel.onclick = () => {
  hideForm();
}

addFormSaveBtn.onclick = () => {
  const task = promoName.value;
  if (!task)
    return;

  tasks.push({
    active: false,
    completed: false,
    task: task,
    count: Math.min(countInput.value ? countInput.value : 1, 999),
    curCount: 0,
  })

  promoName.value = "";
  countInput.value = 1;

  generateTasks();
  hideForm();
}