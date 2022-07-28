function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  bodyEl: document.body,
  colorBtnEl: document.querySelector(".change-color"),
  finalСolorEl: document.querySelector(".color"),
};

refs.colorBtnEl.addEventListener("click", onChengeColorBtn);

function onChengeColorBtn() {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.finalСolorEl.textContent = color;
}
