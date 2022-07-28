const categoriesEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item")

console.log(`Number of categories: ${categoriesEl.children.length} `);

const itemChild = itemEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    
 });