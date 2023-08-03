//  витягуєм елементи категорій
const categories = document.querySelectorAll('ul#categories li.item');

//  підраховуєм елементи категорій
const countCategories = categories.length;
console.log("Number of categories:", countCategories);

// Проходимося циклом по масвы категорый
categories.forEach(
    function (category) {
        
        // дістаємо елементи які портібні для задачі
        const title = category.querySelector('h2');
        const liLength = category.querySelectorAll('li').length;
        
        console.log("Category: ", title.innerHTML);
        console.log("Elements:", liLength);
    }
)
