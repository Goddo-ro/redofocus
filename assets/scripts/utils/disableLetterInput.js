const intRx = /\d/,
  integerChange = (event) => {
    if (
      (event.key.length > 1) ||
      event.ctrlKey ||
      intRx.test(event.key)
    ) {
      return;
    }
    event.preventDefault();
  };

const inputs = document.querySelectorAll(
  'input[type="number"]'
);

for (let input of inputs) {
  input.addEventListener("keypress", integerChange);
}
