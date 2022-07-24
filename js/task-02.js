const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (let i = 0; i < ingredients.length; i += 1){
  const elementLi = document.createElement('li');
  elementLi.classList.add('item');
  elementLi.textContent = ingredients[i];
  console.log(elementLi);

  const elementUl = document.querySelector('ul#ingredients');
  elementUl.appendChild(elementLi);
}
