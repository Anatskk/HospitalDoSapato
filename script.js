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

// Verifica se o primeiro radio button está marcado
const radio1 = document.getElementById('radio1');
const vejaMaisBtn = document.querySelector('.veja-mais');

// Função que mostra o botão "VEJA MAIS" quando a primeira imagem está visível
function verificarSlider() {
    if (radio1.checked) {
        vejaMaisBtn.style.display = 'block'; // Mostra o botão
    } else {
        vejaMaisBtn.style.display = 'none'; // Esconde o botão
    }
}

// Adiciona um evento para verificar a mudança no slider
document.querySelectorAll('.manual-btn').forEach((btn) => {
    btn.addEventListener('click', verificarSlider);
});

// Verifica o estado inicial
verificarSlider();

