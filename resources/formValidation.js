const errorMessage = document.getElementsByClassName('error-message')[0];
const pageUrl = window.location.href;

if(pageUrl.indexOf('?') !== -1){
    const params = pageUrl.split('?')[1];
    const paramValue = params.split('=')[1];
    let message;

    if(paramValue === 'notSent') {
        message = '';
    } else {
        message = '';
    }

    switch(paramValue) {
        case 'notSent': message = 'Your message was not sent. Please try again.';
            break;   
        case 'fieldEmpty': message = 'Please make sure all fields are completed.';
            break;
        default: message = 'Oops, something went wrong. Please try again.';
    }

    errorMessage.innerHTML = message;
    errorMessage.classList.remove('hidden');
}
