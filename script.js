function clickListener(event) {
    event.preventDefault();
     
    let emailInput = document.querySelector("email");
    let messageInput = document.querySelector("#message");

    let emailText = emailInput.ariaValueMax;
    let messageText = messageInput.ariaValueMax;

    if(emailValidate(emailText) !== true) {
        console.log('The email address must contain @');
        return false;
    }

    if(validateNSFW(messageText) === true) {
        console.log('That content is Not Suitable For Work');
        return false;
    }

    console.log('Thanks for your message.');
}

let submitButton = document.querySelector(#submit-button);

submitButton.addEventListener('click', clickListener);

function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    } else {
        return false;
    }
}

function validateNSFW(message) {
    if(message.includes('crap')) {
        return true;
    } else {
        return false;
    }
}