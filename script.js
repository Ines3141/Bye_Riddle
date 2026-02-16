const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPswd = document.getElementById('password').value;
        const cleanedInput = inputPswd
            .toLowerCase()               // convert all to lowercase
            .replace(/[^a-z]/g, '');    // remove anything not a-z
        const correctPswd_Marit = 'dumbledore';
        const correctPswd_Estelle = 'jumpsuits';
        const correctPswd_Rasmus = 'mountain';
        if (cleanedInput === correctPswd_Marit) {
            window.location.href = 'protected.html';
        } else if (cleanedInput === correctPswd_Estelle) {
            window.location.href = 'estelle.html';
        } else if (cleanedInput === correctPswd_Rasmus) {
            window.location.href = 'rasmus.html';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
}

// Scroll-triggered reveal for text blocks
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.text-block').forEach(el => observer.observe(el));