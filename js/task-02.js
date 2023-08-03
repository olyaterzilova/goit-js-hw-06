const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

// Використовуючи цикл forEach, проходимо через кожен елемент (ingredient) в масиві `ingredients`
ingredients.forEach(function (element) {

  // Створюємо новий елемент `li`
  const elLi = document.createElement('li');
  
  // Присвоюємо текстовий вміст (значення елементу) для нового створеного елементу `li`
  elLi.innerText = element;

  // Додаємо створений елемент `li` до кінця списку (ul) за допомогою методу `appendChild`
  list.appendChild(elLi);
});
