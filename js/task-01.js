/*const amountCategory = document.querySelectorAll('.item')
console.log(`Number of categories :`, amountCategory.length)


const categoriesName = document.querySelector('h2')
console.log(`Category:`, categoriesName.textContent)
  
const amountCategoryElements = document.querySelectorAll('.animals')
console.log(`Elements :`, amountCategoryElements.length)*/

const ulEl = document.querySelector("ul#categories");
const countOfChildren = ulEl.children.length;
console.log(`Number of categories: ${countOfChildren}`);


const liEl = ulEl.children;
for (let i = 0; i < liEl.length; i++) {
  const childrenOfLi = liEl[i].children;
  const textContent = childrenOfLi[0].textContent;
  console.log(`Category: `, textContent);
  const countOfChild = childrenOfLi[1].children.length;
  console.log(`Elements: `, countOfChild);
}



