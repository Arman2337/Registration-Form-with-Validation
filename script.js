document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get values from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validate name
    if (name.length < 3) {
        displayError('nameError', 'Name must be at least 3 characters long.');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If the form is valid, you can proceed with registration (e.g., send data to a server)
    if (isValid) {
        alert('Registration successful!');
        // You can add code to send the data to your server here
    }
});

// Function to display error messages
function displayError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let errorElement of errorElements) {
        errorElement.innerText = '';
    }
}
