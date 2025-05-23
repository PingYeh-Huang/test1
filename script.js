const form = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically send the form data to the server.
    successMessage.classList.remove('hidden');
    form.reset();
});
