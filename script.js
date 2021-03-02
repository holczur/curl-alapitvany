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

hiddenNav.addEventListener('click', () => {
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

/* HORIZONTAL SCROLL ****************************/
const sliders = document.querySelectorAll('.items');
let isDown = false;
let startX;
let scrollLeft;


sliders.forEach(slider => {
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
});