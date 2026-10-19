const classButton = document.querySelector('.class-demo');
const bounceButton = document.querySelector('.bounce-button');
const ball = document.querySelector('.ball');
const stage = document.querySelector('.pointer-stage');
const logo = document.querySelector('.pointer-logo');

classButton.addEventListener('click', () => {
    const on = classButton.classList.toggle('on');
    classButton.setAttribute('aria-pressed', on);
});

bounceButton.addEventListener('click', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    ball.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-30px)' }],
        { duration: 300, direction: 'alternate' },
    );
});

stage.addEventListener('pointermove', (event) => {
    const box = stage.getBoundingClientRect();
    logo.style.left = `${event.clientX - box.left}px`;
    logo.style.top = `${event.clientY - box.top}px`;
});

stage.addEventListener('pointerleave', () => {
    logo.style.left = '50%';
    logo.style.top = '50%';
});
