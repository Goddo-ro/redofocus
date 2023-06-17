function generatePromo(promo, id) {
  return `
  <div onclick="setActivePromo(event, ${id})" id="promo-${id}" class="promo ${promo.active ? "active" : ''}">
    <div>
        <label class="checkbox-container check-item" onclick="completePromo(${id})">
            <input class="check-item" id="checkbox-${id}" type="checkbox" ${promo.completed && "checked"}>
            <span class="checkbox check-item" tabindex="0">
                <svg class="check-item" xml:space="preserve" style="enable-background:new 0 0 512 512"
                     viewBox="0 0 24 24" y="0"
                     x="0" height="512" width="512" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"><g><path class="check-item" data-original="currentColor" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path></g></svg>
            </span>
        </label>
        <p>${promo.task}</p>
    </div>
    <div>
        <div class="promo-count-container">
            <span>${promo.curCount}</span>/<p class="promo-count">${promo.count}</p>
        </div>
        <div class="button" onclick="showPromoForm(${id})">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path data-original="currentColor" fill="currentColor"
                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                      stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path data-original="currentColor" fill="currentColor"
                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                      stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path data-original="currentColor" fill="currentColor"
                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                      stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
  </div>
  `;
}

function generatePromoForm(name, count, id) {
  const form = document.createElement("div");
  form.id = "form-" + id;
  form.classList.add("promo");
  form.classList.add("form");
  form.classList.add("update-form")
  form.innerHTML = `
        <input id="task-upd" placeholder="What are you working on?" value="${name}">
        <p>Est Pomodoros</p>
        <div class="count-container">
            <input id="count-input-upd" class="button" type="number" value="${count}">
            <div>
                <div id="up" class="button bottom-shadow">
                    <img src="assets/images/icons/downArrow.svg" alt="down">
                </div>
                <div id="down" class="button bottom-shadow">
                    <img src="assets/images/icons/downArrow.svg" alt="down">
                </div>
            </div>
        </div>
        <div class="footer">
            <div>
              <a onclick="deletePromo(${id})">Delete</a>
            </div>
            <div>
                <a onclick="closePromoForm(${id})">Cancel</a>
                <div onclick="updatePromo(${id})" class="button dark-button">
                    Save
                </div>
            </div>
        </div>
  `;
  return form;
}