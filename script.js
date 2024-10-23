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
