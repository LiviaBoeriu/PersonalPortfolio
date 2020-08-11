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
let currentIndex = 0;


function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let text = document.getElementsByClassName("slidesText");
    let number = document.getElementById("numbertext");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    
    for (let i = 0; i < slides.length; i++) {
        if (i === currentIndex) {
            slides[i].classList.remove('hidden');  
            text[i].classList.remove('hidden'); 
        } else {
            slides[i].classList.add('hidden'); 
            text[i].classList.add('hidden');
        }
    }

    if (currentIndex === 0) {
        prev.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
    }

    if (currentIndex === slides.length - 1) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }

    number.innerHTML = `${currentIndex + 1} / ${slides.length}`;
}

function changeSlide(isNext) {
    if (isNext) {
        currentIndex += 1;
    } else {
        currentIndex -= 1;
    }

    showSlides();
}

