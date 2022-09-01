var asideNav = document.querySelector('.aside-position-nav');
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 547) {
        asideNav.style.position = 'fixed';
        asideNav.style.top = '100px';
    } else {
        asideNav.style.position = 'absolute';
        asideNav.style.top = '647px';
    }
})