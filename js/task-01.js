//  витягуєм елементи категорій


  const categoriesList = document.getElementById("categories");
  const categoriesItems = categoriesList.querySelectorAll(".item");

  // Порахуємо кількість категорій
  const numberOfCategories = categoriesItems.length;
  console.log(`Number of categories: ${numberOfCategories}`);

  // Проходимося по кожному елементу категорії
  categoriesItems.forEach((item) => {

    // Отримуємо заголовок елементу (h2) та усі підкатегорії (li) в ньому
    const categoryName = item['children'][0].textContent;
    const numberOfSubCategories = item['children'][1]['children'].length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfSubCategories}`);
  });


