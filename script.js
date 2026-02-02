const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPswd = document.getElementById('password').value;
        const correctPswd_Marit = 'maritmarit';
        const correctPswd_Estelle = 'estelle';
        const correctPswd_Rasmus = 'rasmus';
        if (inputPswd === correctPswd_Marit) {
            window.location.href = 'protected.html';
        } else if (inputPswd === correctPswd_Estelle) {
            window.location.href = 'estelle.html';
        } else if (inputPswd === correctPswd_Rasmus) {
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