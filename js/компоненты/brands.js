const catalogSlider = null;
const mediaQuerySize = 768;



function catalogSliderInit() {
  if (!catalogSlider && document.documentElement.clientWidth < 768) {
    catalogSlider = new Swiper(".swiper-container", {
      breakpoints: {
        500: { slidesPerView: 1, spaceBetween: 10 },
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
  var windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= mediaQuerySize) {
    catalogSliderInit();
  } else {
    catalogSliderDestroy();
  }
});





let brandsList = document.querySelectorAll(".brands__item");
let isCheck = true;
const closebrand = () => {
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
