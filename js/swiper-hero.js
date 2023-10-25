document.addEventListener('DOMContentLoaded', function () {
    const first = document.querySelector(".first")
    const second = document.querySelector(".second")
    const firstHero = document.querySelector('#first-hero');
    const secondHero = document.querySelector('#second-hero');
    const arrowNext = document.querySelector('.arrow-next'); 
    const arrowPrev = document.querySelector('.arrow-prev');
    const root = document.documentElement;
    
    arrowNext.addEventListener('click', toggleHero);
    arrowPrev.addEventListener('click', toggleHero);

    second.addEventListener('click', toggleSecondHero);
    first.addEventListener('click', toggleFirstHero);
    
    function toggleHero() {
        firstHero.classList.toggle('is-open');
        secondHero.classList.toggle('is-open');
        if (secondHero.classList.contains('is-open')) {
            root.style.setProperty('--color-background', '#AB4E3D');
            second.classList.add('current');
            first.classList.remove('current');
        }
        if (firstHero.classList.contains('is-open')) {
            second.classList.remove('current');
            first.classList.add('current');
            root.style.setProperty('--color-background', '#435476');
        }
    }
    function toggleSecondHero() {
        firstHero.classList.remove('is-open');
        second.classList.add('current');
        first.classList.remove('current');
        secondHero.classList.add('is-open');
        root.style.setProperty('--color-background', '#AB4E3D');
    }

    function toggleFirstHero() {
        second.classList.remove('current')
        first.classList.add('current')
        secondHero.classList.remove('is-open');
        firstHero.classList.add('is-open');
        root.style.setProperty('--color-background', '#435476');
    }
    
});