// Змінна для зберігання поточного значення лічильника
  let counterValue = 0;

  // Отримуємо елементи, з якими будемо працювати
  const valueSpan = document.getElementById('value');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');

  // Функція для оновлення значення лічильника і його відображення в інтерфейсі
  function updateCounterValue(newValue) {
    counterValue = newValue;
    valueSpan.textContent = counterValue;
  }

  // Додаємо слухача кліку на кнопку зі збільшенням лічильника
  incrementButton.addEventListener('click', function () {
    updateCounterValue(counterValue + 1);
  });

  // Додаємо слухача кліку на кнопку зі зменшенням лічильника
  decrementButton.addEventListener('click', function () {
    updateCounterValue(counterValue - 1);
  });