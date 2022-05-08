const wrapper = document.querySelector(".wrapper");
const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = carouselContainer.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-button--left");
const nextButton = document.querySelector(".carousel-button--right");

let sliderWidth = carouselItems[0].getBoundingClientRect().width;

let currentIndex = 0;

carouselItems.forEach((carouselItem, index) => {
  carouselItem.style.left = `${sliderWidth * index}px`;
});

function moveToLeft() {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex += 1;
    carouselContainer.style.transform = `translateX(${
      currentIndex * -sliderWidth
    }px)`;
  } else {
    return;
  }
}

function moveToRight() {
  if (currentIndex === 0) {
    return;
  } else {
    currentIndex -= 1;
    carouselContainer.style.transform = `translateX(${
      currentIndex * -sliderWidth
    }px)`;
  }
}

nextButton.addEventListener("click", function () {
  moveToLeft();
});

prevButton.addEventListener("click", function () {
  moveToRight();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveToRight();
  }
  if (e.key === "ArrowRight") {
    moveToLeft();
  }
});
