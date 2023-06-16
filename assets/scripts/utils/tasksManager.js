function generateTasks() {
  let resultHTML = "";
  tasks.forEach(task => {
    resultHTML += generatePromo(task);
  });
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

function hideForm() {
  addPromoBtn.style.display = "block";
  addPromoForm.style.display = "none";
}

addPromoBtn.onclick = () => {
  addPromoBtn.style.display = "none";
  addPromoForm.style.display = "flex";
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
    count: countInput.value,
    curCount: 0,
  })

  generateTasks();
  hideForm();
}