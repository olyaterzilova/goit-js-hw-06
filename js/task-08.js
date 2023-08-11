const loginForm = document.querySelector('.login-form');
const loginForm2 = document.querySelectorAll('.login-form');


loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки
  
// Зберігаємо значення полів в об'єкт
  const formValues = {};
  
  // Отримуємо значення полів форми
  formValues['emailValue'] = loginForm[0].value;
  formValues['passwordValue'] = loginForm[1].value;

    // Перевіряємо, чи всі поля заповнені
    if (formValues['emailValue']=== '' || formValues['passwordValue'] === '') {
      alert('Всі поля повинні бути заповнені!');
      return;
    }

    // Виводимо об'єкт з даними в консоль
    console.log(formValues);

    // Очищаємо значення полів форми
    loginForm.reset();
  });
