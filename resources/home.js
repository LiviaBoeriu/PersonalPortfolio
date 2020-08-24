
// Portfolio diagram
const iconList = document.getElementsByClassName('icon');
const iconLabels = ['Planning', 'Research', 'Requirements', 'Design', 'Implementation', 'Validation'];
const textElement = document.getElementById('iconText');
const scrollButton = document.getElementById('scroll-down-button');
const downSection = document.getElementById('skills-container');
const svg = document.getElementById('circleSvg');
const svgMask = document.getElementById('mask');
const navHeight = document.querySelector('header nav').offsetHeight;

function showIcon() {
    for(let i=0; i<iconList.length; i++) {
        setTimeout(function () {
            // takes 250ms
            iconList[i].classList.remove('no-opacity');
            textElement.classList.remove('no-opacity');
            textElement.innerHTML = iconLabels[i];

            if(i === iconList.length - 1) {
                setTimeout(hideIcon, 3000);
            }
        }, i * 1000);
    }
}

function hideIcon() {
    for(let i=0; i<iconList.length; i++) {
        setTimeout(function () {
            iconList[i].classList.add('no-opacity');
            textElement.innerHTML = iconLabels[i];
            textElement.classList.add('no-opacity');
            
            if(i === iconList.length - 1) {
                setTimeout(showIcon, 500);
            }
        }, i*150);
    }
}


function checkPortfolioPosition() {
    let portfolioSection = document.getElementsByClassName('portfolio-container')[0];
    let portfolioSectionPosition = portfolioSection.getBoundingClientRect();
    if(portfolioSectionPosition.y < 100 ) {
        showIcon();
        // setTimeout(() => {
        //     animateLine();
        // }, 500) // this should sync the line with the icons
        window.removeEventListener('scroll', checkPortfolioPosition);
    }
}

function scrollDown() {
    let sectionRect = downSection.getBoundingClientRect();
    window.scrollBy(0, sectionRect.y - navHeight);
}

scrollButton.addEventListener('click', scrollDown);
window.addEventListener('scroll', checkPortfolioPosition);
