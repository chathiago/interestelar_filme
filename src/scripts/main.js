document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const header = document.querySelector('header')
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', () => {
    const heroPosition = window.scrollY;

    if (heroPosition > heroHeight) {
        header.classList.add('header--hidden');
    } else {
        header.classList.remove('header--hidden');
    }
})
})

function debounce(func, wait = 20) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}