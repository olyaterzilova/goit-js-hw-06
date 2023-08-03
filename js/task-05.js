// Отримуємо елементи, з якими будемо працювати
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Додаємо слухача події input до інпуту
  nameInput.addEventListener('input', function () {
    // Отримуємо поточне значення інпуту
    const inputValue = nameInput.value.trim();

    // Якщо інпут не порожній, встановлюємо його значення в спан
    // Якщо порожній, встановлюємо значення "Anonymous" в спан
    nameOutput.textContent = inputValue !== '' ? inputValue : 'Anonymous';
  });