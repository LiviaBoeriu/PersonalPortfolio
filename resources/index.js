// Functionality for case navigation
const verticalList = document.getElementsByClassName('vertical-list')[0];

const scrollPage = () => {
    event.preventDefault();

    let target = event.target;

    if(target.tagName.toLowerCase() === 'a') {
        let id = target.getAttribute('href');
        let section = document.getElementById(id);
        let sectionRect = section.getBoundingClientRect();
        let sectionTop = sectionRect.y;
        
        window.scrollBy(0, sectionRect.y - 120);
    }

}

verticalList.addEventListener('click', scrollPage);

// Slideshow for boardgame case page
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

