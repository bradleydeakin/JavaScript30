const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    // navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    //     .then(localMediaStream => {
    //         console.log(localMediaStream)
    //         video.src = window.URL.createObjectURL(localMediaStream);
    //         video.play()
    //     })
    //     .catch(err => {
    //         console.log('videofeed not enabled', err);
    //     })
    const mediaStream = navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = mediaStream;
    video.play();
    // const mediaSource = new MediaSource()
    // video.srcObject = mediaSource;
}

getVideo();