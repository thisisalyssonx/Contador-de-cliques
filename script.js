let count = 0;
const button = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');

button.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});
