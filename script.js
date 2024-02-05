function togglePasswordVisibility(event) {
    event.preventDefault();
    var passwordInput = document.getElementById('passwordInput');
    var eyeOpenButton = document.getElementById('eye-icon');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeOpenButton.src = "./Asset/Img/Eye-open.png";
    } else {
        passwordInput.type = "password";
        eyeOpenButton.src = "./Asset/Img/Eye-close.png";
    }
}


var emailInput = document.getElementById('emailInput');
var nextButton = document.getElementById('loginButton');

function validateInputs() {
    var isEmailValid = isValidEmail(emailInput.value);
    var isPhoneValid = isValidPhone(emailInput.value);
    var isEmailValidNotNull = emailInput.value.trim() !== '';
    nextButton.disabled = !(isEmailValid || isPhoneValid) || !isEmailValidNotNull;
}
emailInput.addEventListener('input', validateInputs);


var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var errormessage = document.getElementById('emailErrorMessage');
var errormessage2 = document.getElementById('passworderror');
var boxinput = document.getElementById('input-box');
var passwordcontainer = document.getElementById('passwordInputContainer');

emailInput.addEventListener('blur', function() {
    validateInput(emailInput);
});

passwordInput.addEventListener('blur', function() {
    validateInput(passwordInput);
});

function validateInput(inputElement) {
    if (inputElement.type === 'text') {
        if (inputElement.value.trim() !== '') {
            inputElement.classList.remove('error-border');
            errormessage.style.display = 'none';

        } else {
            inputElement.classList.add('error-border');
            errormessage.style.display = 'block';
        }
    } else if (inputElement.type === 'password') {
        if (inputElement.value.trim() !== '') {
            boxinput.classList.remove('error-border');
            errormessage2.style.display = 'none';
            passwordcontainer.style.marginBottom = '35px';


        } else {
            boxinput.classList.add('error-border');
            errormessage2.style.display = 'block';
            passwordcontainer.style.marginBottom = '15px';
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}