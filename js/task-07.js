const inputEL = document.querySelector("#font-size-control");
const spamEl = document.querySelector("#text");

spamEl.classList.add("input-style");
inputEL.addEventListener("input",changeInput)
   function changeInput(element) {
  const valInput = element.target.value;
 spamEl.style.fontSize = `${valInput}px`;
  return spamEl.style.fontSize;
};