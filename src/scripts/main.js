document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const header = document.querySelector('header');
    const heroHeight = heroSection.clientHeight;

    playVideo();

    window.addEventListener('scroll', () => {
    const heroPosition = window.scrollY;

    if (heroPosition > heroHeight) {
        header.classList.add('header--hidden')
    } else {
        header.classList.remove('header--hidden')
    }
})

})

function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
        const later = () => {
            timeout = null;
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function playVideo() {
    const videoThumb = document.querySelector('.hero__trailer__thumb');
        videoThumb.addEventListener('click', () => {
            videoThumb.classList.add('hero__trailer__thumb--none');
            document.getElementById('video').src += '&autoplay=1';
    })
}