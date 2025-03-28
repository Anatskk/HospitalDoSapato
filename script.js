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

