document.addEventListener('DOMContentLoaded', function () {
    const first = document.querySelector(".first")
    const second = document.querySelector(".second")
    const firstHero = document.querySelector('#first-hero');
    const secondHero = document.querySelector('#second-hero');
    const root = document.documentElement;

    second.addEventListener('click', toggleSecondHero);
    first.addEventListener('click', toggleFirstHero);

    function toggleSecondHero() {
        firstHero.classList.remove('is-open');
        secondHero.classList.add('is-open');
        root.style.setProperty('--color-background', '#AB4E3D');
    }

    function toggleFirstHero() {
        secondHero.classList.remove('is-open');
        firstHero.classList.add('is-open');
        root.style.setProperty('--color-background', '#435476');
    }
    
});