 const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  // Отримуємо список ul#ingredients
  const ingredientsList = document.getElementById("ingredients");

  // Проходимося по кожному елементу масиву ingredients
const listItems = ingredients.map((ingredient) => {
    
    // Створюємо новий елемент <li>
    const listItem = document.createElement("li");

    // Додаємо текстовий вміст з назвою інгредієнта
    listItem.textContent = ingredient;

    // Додаємо клас "item" до елементу <li>
  listItem.classList.add("item");
  
  return listItem;
  });
  // Додаємо елемент <li> до списку <ul>
ingredientsList.append(...listItems);