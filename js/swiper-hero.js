document.addEventListener('DOMContentLoaded', function () {
    const first = document.querySelector(".first")
    const second = document.querySelector(".second")
    const firstHero = document.querySelector('#first-hero');
    const secondHero = document.querySelector('#second-hero');
    const root = document.documentElement;
    second.addEventListener('click', toggleHero)
    first.addEventListener('click', toggleHero)

    function toggleHero() {
        firstHero.classList.toggle('is-open');
        secondHero.classList.toggle('is-open');
        if (secondHero.classList.contains('is-open')) {
            root.style.setProperty('--color-background', '#AB4E3D')
        }
        if (firstHero.classList.contains('is-open')) {
            root.style.setProperty('--color-background', '#435476')
        }
    }
});