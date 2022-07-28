const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayLiEl=[]
const ingredientsEl = ingredients.forEach(element => {

  const toCreateli = document.createElement("li");
  toCreateli.textContent = element
  toCreateli.classList.add('item');
  arrayLiEl.push(toCreateli)

console.log(toCreateli);
})
const ingredientsUl = document.querySelector("#ingredients");

ingredientsUl.append(...arrayLiEl)