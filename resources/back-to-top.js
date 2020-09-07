const topButton = document.getElementById("back-top");
const main = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];

const documentHeight = document.querySelector('html').offsetHeight;

function scrollFunctionDown() {
    let mainPosition = main.getBoundingClientRect();

    if(mainPosition.top < 60) {
        topButton.classList.remove('hidden');
    } else {
        topButton.classList.add('hidden');
    }
}

function scrollUp() {
    window.scrollTo(0, 0); 
}


window.addEventListener('scroll', scrollFunctionDown);
topButton.addEventListener('click', scrollUp);
