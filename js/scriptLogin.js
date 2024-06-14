document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
    const passwordToggle = document.querySelector('.password-toggle');

    // Load saved username if "Remember me" is checked
    if (localStorage.getItem('rememberMe') === 'true' && localStorage.getItem('username')) {
        rememberMeCheckbox.checked = true;
        usernameInput.value = localStorage.getItem('username');
    }

    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.classList.toggle('active');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Save username if "Remember me" is checked
        if (rememberMeCheckbox.checked) {
            try {
                localStorage.setItem('rememberMe', true);
                localStorage.setItem('username', username);
            } catch (e) {
                console.error('Local Storage is full or not supported.');
            }
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('username');
        }

        // Simulate form submission
        alert('Form submitted!');
    });
});
