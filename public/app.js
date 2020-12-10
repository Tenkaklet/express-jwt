const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();
    const creds = {
        username: username.value,
        password: password.value
    };
    fetch('/secure/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then(response => {
        if(response.status === 'success') {
            localStorage.setItem('leToken', response.token);
            location.href = response.redirect;
        } else {
            alert('Please input right username & password');
        }
    });
});