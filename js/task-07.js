 // Отримуємо елементи, з якими будемо працювати
  const fontSizeControl = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  // Додаємо слухача події input до input#font-size-control
  fontSizeControl.addEventListener('input', function () {
    // Отримуємо поточне значення input#font-size-control
    const fontSizeValue = fontSizeControl.value;

    // Встановлюємо розмір тексту в спані textSpan з використанням властивості font-size
    textSpan.style.fontSize = `${fontSizeValue}px`;
  });