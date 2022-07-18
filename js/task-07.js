const select = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

select.addEventListener("change", (e) => {
  text.style.fontSize = e.target.value + "px";
});
