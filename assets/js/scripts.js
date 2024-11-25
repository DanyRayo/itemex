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
