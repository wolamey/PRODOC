const nav_link = document.querySelectorAll(".nav-link");

nav_link.forEach((el) => {
  el.addEventListener("click", () => {
    // Убираем класс 'active' у всех nav-link
    nav_link.forEach((link) => link.classList.remove("active"));
    // Добавляем класс 'active' только к текущему элементу
    el.classList.add("active");
  });
});
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  root: null, // Используйте viewport как корневой элемент
  rootMargin: "0px", // Установите отступы, если нужно
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

// Дополнительная логика для проверки в пикселях
window.addEventListener("scroll", () => {
  elements.forEach((elm) => {
    const rect = elm.getBoundingClientRect();
    if (rect.top < window.innerHeight - 500) {
      // Например, 200 пикселей от нижней границы окна
      elm.classList.add("element-show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navContainer = document.querySelector(".nav__container");

  toggler.addEventListener("click", function () {
      navContainer.classList.toggle("show"); // Переключаем класс
  });
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});






  document.addEventListener('DOMContentLoaded', function () {
    // Инициализируем EmailJS
    emailjs.init("rLgQ3Ae2anwIKnqVj");

    // Находим все формы на странице
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        // Собираем данные формы
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });

        // Отправляем данные через EmailJS
        emailjs
          .send('service_wqldakw', 'template_k4sz5bs', formObject)
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Ваша заявка успешно отправлена!');
              form.reset(); // Сбрасываем форму
            },
            function (error) {
              console.log('FAILED...', error);
              alert('Произошла ошибка при отправке заявки.');
            }
          );
      });
    });
  });

