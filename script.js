
function handleFormSubmit() {
    document.getElementById('contactForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });
}

// Call
handleFormSubmit();