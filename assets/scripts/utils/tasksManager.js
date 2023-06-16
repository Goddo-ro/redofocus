function generateTasks() {
  let resultHTML = "";
  tasks.forEach(task => {
    resultHTML += generatePromo(task);
  });
  promoList.innerHTML = resultHTML;
}