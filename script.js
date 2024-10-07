const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirm_password')
const form = document.getElementById('main_form')

function validatePasswords() {
    // Clear any previous custom validity messages
    confirmPasswordInput.setCustomValidity('');
    
    // Check if the passwords do not match
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match');
    }
}

form.addEventListener('submit', (event) => {
    validatePasswords();

    if (!confirmPasswordInput.checkValidity()) {
        confirmPasswordInput.reportValidity();
        event.preventDefault();
    }
});

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);