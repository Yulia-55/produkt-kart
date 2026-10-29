// 11.4 Добавление логики к Форме и вывод email в консоль
const form = document.querySelector('.footer-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = form.querySelector('.footer-form__input');
  const emailValue = {
    email: emailInput.value
  };
  console.log(emailValue);  
});

// 11.5 Открывание модального окна
const modalButtonOpen = document.querySelector('.footer-form__modal');
modalButtonOpen.addEventListener('click', () => {
  const modalShowed = document.querySelector('.modal-showed');
  const modalShowedContent = document.querySelector('.modal-showed__content');
  modalShowed.classList.add('modal-showed--active');
  modalShowedContent.classList.add('modal-showed__content--active');
});

function closeModal() {
  const modalShowed = document.querySelector('.modal-showed');
  const modalShowedContent = document.querySelector('.modal-showed__content');

  modalShowed.classList.remove('modal-showed--active');
  modalShowedContent.classList.remove('modal-showed__content--active');
}

const modalButtonClose = document.querySelector('.modal-showed__close');

modalButtonClose.addEventListener('click', () => {
  closeModal();
});

// Добавление логики к форме и вывод данных в консоль

const formRegistration = document.querySelector('.modal-showed__registration');
formRegistration.addEventListener('submit', (event) => {
  event.preventDefault();  
  if (document.querySelector('#password').value === document.querySelector('#confirm-password').value) {
    const registrasionYuser = {
      firstName: document.querySelector('#first-name').value,
      lastName: document.querySelector('#last-name').value,
      birthDate: document.querySelector('#birth-date').value,
      login: document.querySelector('#login').value,      
      newData: new Date().toLocaleString()
    }
          console.log(registrasionYuser);
          alert('Регистрация прошла успешно');
          closeModal();
  } else {
    alert('Пароли не совпадают');
    }
});

