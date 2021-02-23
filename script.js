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

/*MEDIA GALERY **********************************************/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const news = document.querySelectorAll('news')
