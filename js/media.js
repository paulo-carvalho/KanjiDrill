// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    playAudio();
}

// Audio player
var my_media = null;
var mediaTimer = null;

// Play audio
function playAudio() {
    // Create Media object from src
    my_media = new Media(URI('../sound/lobby.wav'), onSuccess, onError);

    alert("Hello");
    // Play audio
    my_media.play();
}

// Pause audio
//
function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}

// Stop audio
//
function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
    return;
}

// onError Callback
//
function onError(error) {
    return;
}