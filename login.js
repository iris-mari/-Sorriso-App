// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const forms = document.querySelectorAll('.form');
    const switchButtons = document.querySelectorAll('.switch-button');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding form
            const target = this.getAttribute('data-tab');
            forms.forEach(form => {
                form.classList.remove('active');
                if (target === 'login' && form.id === 'loginForm') {
                    form.classList.add('active');
                } else if (target === 'signup' && form.id === 'signupForm') {
                    form.classList.add('active');
                }
            });
        });
    });

    // Switch form buttons
    switchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update active tab
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-tab') === target) {
                    btn.classList.add('active');
                }
            });

            // Show corresponding form
            forms.forEach(form => {
                form.classList.remove('active');
                if (target === 'login') {
                    document.getElementById('loginForm').classList.add('active');
                } else {
                    document.getElementById('signupForm').classList.add('active');
                }
            });
        });
    });

    // Form submission
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send the data to your server
        console.log('Login submitted:', { email, password });
        
        // Para demonstração, redireciona para menu.html
        window.location.href = 'menu.html';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        
        // Here you would typically send the data to your server
        console.log('Signup submitted:', { email, password });
        
        // For demo purposes, show alert
        alert('Cadastro realizado com sucesso!');
    });
});