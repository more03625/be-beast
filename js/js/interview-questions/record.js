const videoElement = document.getElementById('videoElement');
const canvasElement = document.getElementById('canvasElement');
const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');
const shareScreenButton = document.getElementById('shareScreen');

let mediaRecorder;
let recordedChunks = [];

// Get user media and display it in the video element
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    videoElement.srcObject = stream;
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'recorded-video.webm';
      a.click();
      window.URL.revokeObjectURL(url);
    };
  });

shareScreenButton.addEventListener('click', () => {
  navigator.mediaDevices
    .getDisplayMedia({ video: true, audio: true })
    .then((screenStream) => {
      videoElement.srcObject = screenStream;
      mediaRecorder = new MediaRecorder(screenStream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = url;
        a.download = 'screen-recorded-video.webm';
        a.click();
        window.URL.revokeObjectURL(url);
      };

      startRecordingButton.disabled = false;
      stopRecordingButton.disabled = true;
    })
    .catch((error) => {
      console.error('Error accessing screen:', error);
    });
});

startRecordingButton.addEventListener('click', () => {
  mediaRecorder.start();
  startRecordingButton.disabled = true;
  stopRecordingButton.disabled = false;
});

stopRecordingButton.addEventListener('click', () => {
  mediaRecorder.stop();
  startRecordingButton.disabled = false;
  stopRecordingButton.disabled = true;
});
