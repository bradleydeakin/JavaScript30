const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(e){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
};

function updateButton(){
    
    if(video.paused){
        toggle.textContent = "►";
    }else{
        toggle.textContent = "II";
    }
    console.log('update button');
}

function skip(){
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    console.log(this.value);
}

function handleprogress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    console.log(progress);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
toggle.addEventListener('play', updateButton);
toggle.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleprogress);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);