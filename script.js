const images = ["./assets/image_1.jpg", "./assets/image_2.jpeg", "./assets/image_3.jpeg"];

let currentIndex = 0;
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const imageCarousel = document.querySelector(".image-carousel")

leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        imageCarousel.style.transition = "opacity 0.5s ease";
        imageCarousel.style.opacity = 0;
        currentIndex--;
        setTimeout(()=>{
            imageCarousel.src = images[currentIndex];
            imageCarousel.style.opacity = 1;
        }, 300);
    }
});

rightButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        imageCarousel.style.transition = "opacity 0.75s ease";
        imageCarousel.style.opacity = 0;
        currentIndex++; 
        setTimeout(()=>{
        imageCarousel.src = images[currentIndex];
        imageCarousel.style.opacity = 1;
    }, 300);
}});
