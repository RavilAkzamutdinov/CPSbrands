console.log('start')
// if (document.documentElement.clientWidth < 768) {
//   console.log(1)
//   var swiper = new Swiper(".swiper-container", {
//     breakpoints: {
//       // when window width is <= 320px
//       500: { slidesPerView: 1, spaceBetween: 10 },
//       // when window width is <= 480px
//       740: { slidesPerView: 2, spaceBetween: 24 },

//       767: { slidesPerView: 3, spaceBetween: 24 },
//     },
//     pagination: {
//       el: ".swiper-pagination-brands",
//       clickable: true,
//     },
//   });
// }

var catalogSlider = null;
var mediaQuerySize = 768;

if (document.documentElement.clientWidth < 768) {
  catalogSlider = new Swiper(".swiper-container", {
    breakpoints: {
      // when window width is <= 320px
      500: { slidesPerView: 1, spaceBetween: 10 },
      // when window width is <= 480px
      740: { slidesPerView: 2, spaceBetween: 24 },

      767: { slidesPerView: 3, spaceBetween: 24 },
    },
    pagination: {
      el: ".swiper-pagination-brands",
      clickable: true,
    },
  });
}

function catalogSliderInit() {
  if (!catalogSlider && document.documentElement.clientWidth < 768) {
    catalogSlider = new Swiper(".swiper-container", {
      breakpoints: {
        // when window width is <= 320px
        500: { slidesPerView: 1, spaceBetween: 10 },
        // when window width is <= 480px
        740: { slidesPerView: 2, spaceBetween: 24 },

        767: { slidesPerView: 3, spaceBetween: 24 },
      },
      pagination: {
        el: ".swiper-pagination-brands",
        clickable: true,
      },
    });
  }
}

function catalogSliderDestroy() {
  if (catalogSlider) {
    catalogSlider.destroy();
    console.log('destroy')
    catalogSlider = null;
  }
}

window.addEventListener("resize", function () {
  // Берём текущую ширину экрана
  var windowWidth = document.documentElement.clientWidth;
  // Если ширина экрана меньше или равна mediaQuerySize(768)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit();
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy();
  }
});





let brandsList = document.querySelectorAll(".brands__item");

let isCheck = true;

let brandsClose = () => {
  for (let i = 0; i <= brandsList.length - 1; i++) {
    brandsList[i].style.display = "";
  }
  isCheck = true;
};
let brandsOpen = () => {
  for (let i = 0; i <= brandsList.length - 1; i++) {
    brandsList[i].style.display = "block";
  }
  isCheck = false;
};

let btnNext = document.querySelector(".brands__btn-next");
btnNext.addEventListener("click", function () {
  console.log(1)
  if (isCheck) {
    brandsOpen();
    btnNext.textContent = "Скрыть";
  } else {
    brandsClose();
    btnNext.textContent = "Показать все";
  }
});
