const header = document.querySelector('.header');

window.addEventListener('scroll', stickynav);

stickynav();

function stickynav() {
    if (window.scrollY > 0 ) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('open')
    })
})