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

document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > document.documentElement.clientWidth) {
        console.log('Elemento causando overflow:', el);
    }
});

const radio1 = document.getElementById('radio1');
const vejaMaisBtn = document.querySelector('.veja-mais');

function verificarSlider() {
    if (radio1.checked) {
        vejaMaisBtn.style.display = 'block';
    } else {
        vejaMaisBtn.style.display = 'none'; 
    }
}

document.querySelectorAll('.manual-btn').forEach((btn) => {
    btn.addEventListener('click', verificarSlider);
});

verificarSlider();

let currentIndex1 = 0;
const slider1 = document.getElementById("slider2");
const totalCards1 = document.querySelectorAll("#slider2 .card").length;
const cardWidth1 = 250; 
const visibleCards = 3; 

let currentIndex2 = 0;
const slider2 = document.getElementById("slider4");
const totalCards2 = document.querySelectorAll("#slider4 .card3").length;

function updateSlider(slider, currentIndex) {
    const offset = -(currentIndex * cardWidth1);
    slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide(sliderIndex) {
    if (sliderIndex === 1) {
        if (currentIndex1 < totalCards1 - visibleCards) {
            currentIndex1++;
        } else {
            currentIndex1 = 0; 
        }
        updateSlider(slider1, currentIndex1);
    } else if (sliderIndex === 2) {
        if (currentIndex2 < totalCards2 - visibleCards) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateSlider(slider2, currentIndex2);
    }
}

function prevSlide(sliderIndex) {
    if (sliderIndex === 1) {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = totalCards1 - visibleCards; 
        }
        updateSlider(slider1, currentIndex1);
    } else if (sliderIndex === 2) {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = totalCards2 - visibleCards;
        }
        updateSlider(slider2, currentIndex2);
    }
}

setInterval(function() {
    nextSlide(1);  
    nextSlide(2);  
}, 5000);
