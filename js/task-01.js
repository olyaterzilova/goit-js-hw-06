//  витягуєм елементи категорій


  const categoriesList = document.getElementById("categories");
  const categoriesItems = categoriesList.querySelectorAll(".item");

  // Порахуємо кількість категорій
  const numberOfCategories = categoriesItems.length;
  console.log(`Number of categories: ${numberOfCategories}`);

  // Проходимося по кожному елементу категорії
  categoriesItems.forEach((item) => {
    // Отримуємо заголовок елементу (h2) та усі підкатегорії (li) в ньому
    const categoryName = item.querySelector("h2").textContent;
    const subCategories = item.querySelectorAll("ul li");
    const numberOfSubCategories = subCategories.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfSubCategories}`);
  });


