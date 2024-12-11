const rotatingFigure = document.querySelector('.rotating-figure img');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const figureTopPosition = rotatingFigure.getBoundingClientRect().top;
  const halfWindowHeight = window.innerHeight / 2;

  // Determina la dirección del scroll
  const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollTop;

  // Verifica si la figura está dentro del viewport
  if (figureTopPosition < halfWindowHeight && figureTopPosition > -halfWindowHeight) {
    if (scrollDirection === 'down') {
      rotatingFigure.style.animation = 'rotateFigure 0.5s ease-in-out forwards';
    } else {
      rotatingFigure.style.animation = 'rotateFigure 0.5s ease-in-out forwards reverse';
    }
  } else {
    rotatingFigure.style.animation = ''; // Detiene la animación si la figura no está en el viewport
  }
});
