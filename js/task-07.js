// Отримуємо посилання на елементи з DOM
  const fontSizeControl = document.getElementById("font-size-control");
  const textSpan = document.getElementById("text");

// Функція для зміни розміру шрифту
function changeFontSize() {
  const fontSizeValue = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSizeValue}px`;
}

// Додаємо обробник події input до поля вводу
fontSizeControl.addEventListener("input", changeFontSize);

// Виклик функції один раз для встановлення початкового значення
changeFontSize();
