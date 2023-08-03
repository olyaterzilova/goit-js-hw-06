const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    // Отримуємо значення полів форми
    const formData = new FormData(loginForm);

    // Перевіряємо, чи всі поля заповнені
    if (formData.get('email') === '' || formData.get('password') === '') {
      alert('Всі поля повинні бути заповнені!');
      return;
    }

    // Зберігаємо значення полів в об'єкт
    const formValues = {};
    formData.forEach((value, name) => {
      formValues[name] = value;
    });

    // Виводимо об'єкт з даними в консоль
    console.log(formValues);

    // Очищаємо значення полів форми
    loginForm.reset();
  });
