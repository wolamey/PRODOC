const nav_link = document.querySelectorAll(".nav-link");

nav_link.forEach((el) => {
  el.addEventListener("click", () => {

    nav_link.forEach((link) => link.classList.remove("active"));

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
  root: null, 
  rootMargin: "0px", 
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}


window.addEventListener("scroll", () => {
  elements.forEach((elm) => {
    const rect = elm.getBoundingClientRect();
    if (rect.top < window.innerHeight - 500) {
     
      elm.classList.add("element-show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navContainer = document.querySelector(".nav__container");

  toggler.addEventListener("click", function () {
      navContainer.classList.toggle("show"); 
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

  emailjs.init("rLgQ3Ae2anwIKnqVj");


  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 

    
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });


  
      emailjs
        .send('service_wqldakw', 'template_k4sz5bs', formObject)
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Ваша заявка успешно отправлена!');
            form.reset();
          },
          function (error) {
            console.log('FAILED...', error);
            alert('Произошла ошибка при отправке заявки.');
          }
        );
    });
  });
});
