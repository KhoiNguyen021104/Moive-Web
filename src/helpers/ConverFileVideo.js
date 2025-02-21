import Hls from 'hls.js';

const useHls = (videoElement, videoSrc) => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(videoElement);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoElement.play();
    });
  } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.src = videoSrc;
    videoElement.addEventListener('loadedmetadata', () => {
      videoElement.play();
    });
  }
};

export default useHls;
