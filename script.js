const form = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');
const aiStatus = document.getElementById('aiStatus');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically send the form data to the server.
    const age = parseFloat(document.getElementById('catAge').value);
    const weight = parseFloat(document.getElementById('catWeight').value);
    const hairLength = document.getElementById('hairLength').value;

    let messages = [];

    if (!isNaN(weight) && weight > 6) {
        messages.push('Your cat may be overweight.');
    }

    if (!isNaN(age) && age < 1) {
        messages.push('Kittens may require special grooming.');
    }

    if (hairLength === 'long') {
        messages.push('Long-haired cats benefit from extra brushing.');
    }

    aiStatus.textContent = messages.length ? messages.join(' ') : 'No special recommendations.';
    successMessage.classList.remove('hidden');
    form.reset();
});
