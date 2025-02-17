const images = ["./assets/image_1.jpg", "./assets/image_2.jpeg", "./assets/image_3.jpeg"];

let currentIndex = 0;
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const imageCarousel = document.querySelector(".image-carousel");

const updateButtons = () => {
    leftButton.style.cursor = currentIndex === 0 ? "not-allowed" : "pointer";
    leftButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
    rightButton.style.cursor = currentIndex === images.length - 1 ? "not-allowed" : "pointer";
    rightButton.style.opacity = currentIndex === images.length - 1 ? "0.5" : "1";
};

const changeImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
        imageCarousel.style.transition = "opacity 0.4s ease";
        imageCarousel.style.opacity = 0;
        currentIndex = newIndex;
        setTimeout(() => {
            imageCarousel.src = images[currentIndex];
            imageCarousel.style.opacity = 1;
        }, 400);
        updateButtons();
    }
};

leftButton.addEventListener("click", () => changeImage(-1));
rightButton.addEventListener("click", () => changeImage(1));

updateButtons();
