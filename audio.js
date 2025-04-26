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
        
        // Pause any currently playing audio
        audioPlayer.pause();
        audioPlayer.currentTime = 0;

        // Set the new audio source and play it
        audioPlayer.src = audioSrc;
        audioPlayer.play();

        // Remove "Now Playing" overlay from the previous album
        if (currentPlaying) {
            currentPlaying.classList.remove('now-playing');
        }

        // Add "Now Playing" overlay to the clicked album
        const card = image.closest('.card');
        card.classList.add('now-playing');
        currentPlaying = card;
    });
});