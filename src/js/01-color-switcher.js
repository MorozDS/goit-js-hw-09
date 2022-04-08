
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyColorEl = document.querySelector("body");

let timerId = null;

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    bodyColorEl.style.backgroundColor = getRandomHexColor()
  }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;

});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});