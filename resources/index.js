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

// Enlarge images on click
const caseImage = document.getElementsByClassName('case-picture');
const pictureFrame = document.getElementsByClassName('picture-frame');

function toogleZoomImage(element) {
    if(element.className.indexOf('image-enlarged') !== -1) {
        element.classList.remove('image-enlarged'); 
    } else {
        element.classList.add('image-enlarged');
    }
    
}

for(let i = 0; i < pictureFrame.length; i++) {
    pictureFrame[i].addEventListener('click', function(e) {
        const tagName = e.target.tagName.toLowerCase();
        // if(tagName === 'div') {
        //     toogleZoomImage(e.target)
        // } else if(tagName === 'img'){
        //     toogleZoomImage(e.target.parentElement)
        // }            

        toogleZoomImage(tagName === 'div' ? e.target : e.target.parentElement)
    });
}


verticalList.addEventListener('click', scrollPage);
const body = document.querySelector('body');

body.addEventListener('click', function(e) {
    if(e.target.className.indexOf('picture-frame') !== -1) {
        return;
    }
    const images = document.querySelectorAll('.image-enlarged');

    for(let img of images) {
        img.classList.remove('image-enlarged');
    }
})