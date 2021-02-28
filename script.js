/*NAVIGATION ***************************************************/

const closeMenu = document.querySelector('.close')
const openMenu = document.querySelector('.open')
const hiddenNav = document.querySelector('.hidden-nav')
const mobileNav = document.querySelector('.mobile-nav-head')
const welcomeText = document.querySelector('.welcome .container')
const navLogo = document.querySelector('.logo-purple')

openMenu.addEventListener('click', () => {
    hiddenNav.classList.remove('invisible');
    mobileNav.classList.add('invisible');
    welcomeText.classList.add('hide');
    navLogo.classList.add('hide');
})

closeMenu.addEventListener('click', () => {
    hiddenNav.classList.add('invisible');
    mobileNav.classList.remove('invisible');
    welcomeText.classList.remove('hide');
    navLogo.classList.remove('hide');
})

/*FAQ **********************************************/

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
});

