document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".experience__years-cont");
    let currentNumber = 0; // Valor inicial
    const targetNumber = 23; // Número final
    const duration = 3000; // Duración de la animación en ms (3 segundos)
    const totalFrames = Math.round(duration / 16); // Número total de frames (~60fps)
    const increment = targetNumber / totalFrames; // Incremento suave por frame

    const animateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            if (currentNumber > targetNumber) currentNumber = targetNumber; // Asegura que no pase del objetivo
            container.textContent = Math.floor(currentNumber); // Redondea para mostrar números enteros
            requestAnimationFrame(animateCounter);
        } else {
            container.textContent = targetNumber; // Asegura que termine en el número exacto
        }
    };

    animateCounter(); // Inicia la animación
});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".experience__projects-cont");
    let currentNumber = 0; // Valor inicial
    const targetNumber = 15; // Número final
    const duration = 3000; // Duración de la animación en ms (3 segundos)
    const totalFrames = Math.round(duration / 16); // Número total de frames (~60fps)
    const increment = targetNumber / totalFrames; // Incremento suave por frame

    const animateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            if (currentNumber > targetNumber) currentNumber = targetNumber; // Asegura que no pase del objetivo
            container.textContent = Math.floor(currentNumber); // Redondea para mostrar números enteros
            requestAnimationFrame(animateCounter);
        } else {
            container.textContent = targetNumber; // Asegura que termine en el número exacto
        }
    };

    animateCounter(); // Inicia la animación
});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".experience__clients-cont");
    let currentNumber = 0; // Valor inicial
    const targetNumber = 50; // Número final
    const duration = 3000; // Duración de la animación en ms (3 segundos)
    const totalFrames = Math.round(duration / 16); // Número total de frames (~60fps)
    const increment = targetNumber / totalFrames; // Incremento suave por frame

    const animateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            if (currentNumber > targetNumber) currentNumber = targetNumber; // Asegura que no pase del objetivo
            container.textContent = Math.floor(currentNumber); // Redondea para mostrar números enteros
            requestAnimationFrame(animateCounter);
        } else {
            container.textContent = targetNumber; // Asegura que termine en el número exacto
        }
    };

    animateCounter(); // Inicia la animación
});

//-----------------FADE IN---------------------------

const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

const wavePath = document.querySelector('.wave');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? 1 : -1; // Detecta dirección del scroll
    const movement = direction * 10; // Ajusta la velocidad del movimiento

    // Aplica la transformación al path del SVG
    wavePath.style.transform = `translateX(${movement}px)`;

    // Actualiza la posición para el próximo scroll
    lastScrollY = currentScrollY;
});


// Seleccionamos todos los elementos con clases de animación
const elements = document.querySelectorAll('.translatex, .translatex-left');

// Configuración del Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Agrega la clase .active al elemento visible
        }
    });
});

// Observamos cada elemento
elements.forEach(el => observer.observe(el));

// Botón para regresar arriba
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Funcionalidad del botón
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//--------------------Menu hamburguesa-------------------------
const navIcon = document.querySelector('.nav-bars');
const mobileMenu = document.getElementById('mobileMenu');

navIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navIcon.classList.toggle('active');
});