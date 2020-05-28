let stream = () => {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { width: 1280, height: 720 }
    }).then(mediaStream => {
        let video = document.querySelector('#video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => video.play();
    }).catch(err => console.log(err));
}

