
// Open resume in new tab

const resume = document.getElementById('resume');
function openResume() {
    window.open('resources/resume.pdf');
}

resume.addEventListener('click', openResume);