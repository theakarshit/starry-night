document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = '0923'; // Set the password here
    if (password === correctPassword) {
        // Redirect the user to a new page (for now you can use "newpage.html")
        window.location.href = 'newpage.html'; // You can replace 'newpage.html' with any page name
    } else {
        alert('Incorrect password');
    }
});
