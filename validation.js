const form =document.getElementById('contactForm');
const username =document.getElementById('cname');
const email =document.getElementById('cemail');
const detail =document.getElementById('cmessage');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if(validForm()) {
        form.submit();
        form.reset();
    }
});

const validForm = () => {
    return username.parentElement.classList.contains('success') &&
        email.parentElement.classList.contains('success') &&
        detail.parentElement.classList.contains('success');
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const detailValue = detail.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(detailValue === '') {
        setError(detail, 'Project details are required');
    } else {
        setSuccess(detail);
    }
};