let count = 0;
const countDisplay = document.getElementById('count');

function updateDisplay() {
  countDisplay.textContent = count;
}

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}
