function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', function () {
    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();

    // Змінюємо фон елемента body
    document.body.style.backgroundColor = randomColor;

    // Виводимо значення кольору в span.color
    colorSpan.textContent = randomColor;
  });
