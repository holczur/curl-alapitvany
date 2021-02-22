const closeMenu = document.querySelector('.close')
const openMenu = document.querySelector('.open')
const hiddenNav = document.querySelector('.hidden-nav')
const mobileNav = document.querySelector('.mobile-nav-head')
const welcomeText = document.querySelector('.welcome .container')

openMenu.addEventListener('click', () => {
    hiddenNav.classList.remove('invisible');
    mobileNav.classList.add('invisible');
    welcomeText.classList.add('hide');
})

closeMenu.addEventListener('click', () => {
    hiddenNav.classList.add('invisible');
    mobileNav.classList.remove('invisible');
    welcomeText.classList.remove('hide');

})
