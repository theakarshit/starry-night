document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = 'your_password'; // Set your password here
    if (password === correctPassword) {
        document.getElementById('protected-content').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    } else {
        alert('Incorrect password');
    }
});
