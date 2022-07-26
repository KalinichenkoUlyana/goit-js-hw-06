function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");
const bodyColor = document.querySelector('body');

button.addEventListener("click", () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  const buttonColorText = document.querySelector(".color");
  buttonColorText.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});


