function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

let inputValue = 0;
input.addEventListener("input", (e) => {
  inputValue = Number(e.target.value);
});


function createBoxes(amount) {
  let allBoxes = document.querySelectorAll(".box").length + 1;
  let boxSize = 30;

  while (allBoxes <= amount) {
    const box = document.createElement("div");
    box.className = "box";

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
    boxSize += 10;
    allBoxes += 1;
  }
}

function destroyBoxes() {
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach((box) => box.remove());
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes(inputValue));
destroyBtn.addEventListener("click", destroyBoxes);
