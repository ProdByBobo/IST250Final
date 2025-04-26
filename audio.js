// Select all album images
const albumImages = document.querySelectorAll('.album-image');

// Create an audio element
const audioPlayer = new Audio();

// Track the currently playing album
let currentPlaying = null;

// Add click event listeners to each album image
albumImages.forEach(image => {
    image.addEventListener('click', () => {
        // Get the audio file from the data-audio attribute
        const audioSrc = image.getAttribute('data-audio');
        const card = image.closest('.card');

        // If the clicked album is already playing, stop the music
        if (currentPlaying === card) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            card.classList.remove('now-playing');
            currentPlaying = null;
            return;
        }

        // Pause any currently playing audio
        if (currentPlaying) {
            currentPlaying.classList.remove('now-playing');
        }
        audioPlayer.pause();
        audioPlayer.currentTime = 0;

        // Set the new audio source and play it
        audioPlayer.src = audioSrc;
        audioPlayer.play();

        // Add "Now Playing" overlay to the clicked album
        card.classList.add('now-playing');
        currentPlaying = card;
    });
});