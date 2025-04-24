// Fade-in effect for the home page
function fadeInWelcomeText() {
        const welcomeText = document.querySelector('.cover-container h1');
        if (welcomeText) {
            welcomeText.classList.add('fade-in'); 
        }
    const welcomeText2 = document.querySelector('.cover-container p');
    if (welcomeText2) {
        welcomeText2.classList.add('fade-in'); 
    }
}

// Call the function
fadeInWelcomeText();