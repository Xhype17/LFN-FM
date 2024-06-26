const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const volumeControl = document.getElementById('volume');
const audio = new Audio('https://stream-172.zeno.fm/lnj29vfphgkvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJsbmoyOXZmcGhna3Z2IiwiaG9zdCI6InN0cmVhbS0xNzIuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImRQYUVzLWVhVGhpeVJYLVRPSkFrWkEiLCJpYXQiOjE3MTkzNTA4MDUsImV4cCI6MTcxOTM1MDg2NX0.8TH94dwl_HpJkcTUWihgT1CYqYEvl87TFEefjaGpvig'); // Ganti dengan file musik kamu

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    const progress = document.getElementById('progress');
    progress.value = (audio.currentTime / audio.duration) * 100;

    const currentTimeElem = document.getElementById('current-time');
    const durationElem = document.getElementById('duration');

    currentTimeElem.textContent = formatTime(audio.currentTime);
    durationElem.textContent = formatTime(audio.duration);
});

// Event listener untuk mengatur volume
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value / 100;
});

// Event listener untuk mute/unmute
muteBtn.addEventListener('click', () => {
    if (isMuted) {
        audio.volume = volumeControl.value / 100;
        isMuted = false;
    } else {
        audio.volume = 0;
        isMuted = true;
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}
