// Отримуємо елемент інпуту, з яким будемо працювати
  const validationInput = document.getElementById('validation-input');

  // Додаємо слухача події blur до інпуту
  validationInput.addEventListener('blur', function () {
    // Отримуємо кількість символів, яка повинна бути у введеному значенні, з атрибуту data-length
    const dataLength = parseInt(validationInput.getAttribute('data-length'), 10);

    // Отримуємо поточне значення інпуту та видаляємо пробіли з початку та кінця
    const inputValue = validationInput.value.trim();

    // Перевіряємо, чи кількість символів в інпуті відповідає очікуваній кількості
    if (inputValue.length === dataLength) {
      // Якщо введена правильна кількість символів, додаємо клас valid та видаляємо клас invalid
      validationInput.classList.add('valid');
      validationInput.classList.remove('invalid');
    } else {
      // Якщо введена неправильна кількість символів, додаємо клас invalid та видаляємо клас valid
      validationInput.classList.add('invalid');
      validationInput.classList.remove('valid');
    }
  });