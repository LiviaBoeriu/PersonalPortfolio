
// Portfolio diagram
const iconList = document.getElementsByClassName('icon');
const iconLabels = ['Planning', 'Research', 'Requirements', 'Design', 'Implementation', 'Validation'];
const textElement = document.getElementById('iconText');
const scrollButton = document.getElementById('scroll-down-button');
const downSection = document.getElementById('skills-container');
const svg = document.getElementById('circleSvg');
const svgMask = document.getElementById('mask');
const navHeight = document.querySelector('header nav').offsetHeight;
const rotateValues = [64, 122, 180, 241, 300, 366];


// showIcons
// - display text and icon (takes 250ms)
// - animate line in (takes 600ms)
// - display next text and icon (another 250ms)
// - hide line and move it (250ms)


// showIcons
// - display text and icon each 1s 


// showLine (delay 250ms)
// - hide mask (AND STAY 1s)
// - fadeOut (takes 250ms)
// - show mask
// - rotate

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
        }, i * 1250);
    }
}

function animateLine() {
    let index = 1;

    function animationProcess() {
        svgMask.classList.add('hide')

        setTimeout(() => {
            svg.classList.add('fadeOut');

            setTimeout(() => {
                svgMask.classList.remove('hide');
                svg.style.transform = `rotateZ(${rotateValues[index]}deg)`;
                svg.classList.remove('fadeOut');

                if (index !== rotateValues.length - 1) {
                    index += 1;
                } else {
                    index = 0;
                }
            }, 250)
        }, 1000)
    }

    animationProcess();
    const animationLoop = setInterval(animationProcess, 1500)
    // need to clear the interval (while hideIcons) and reset
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
