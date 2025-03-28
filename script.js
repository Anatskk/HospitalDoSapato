document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    setInterval(changeSlide, 6000);
});

function toggleMenu() {
    document.getElementById("overlay").classList.toggle("show");
}
