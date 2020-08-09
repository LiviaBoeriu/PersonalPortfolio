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



const resume = document.getElementById('resume');

const openPDF = () => {
    window.openTab('../resources/resume.pdf', '_blank');
}

resume.addEventListener('click', openPDF);