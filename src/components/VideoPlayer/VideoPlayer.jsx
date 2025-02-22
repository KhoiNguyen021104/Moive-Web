/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./VideoPlayer.module.scss";
import ReactPlayer from "react-player";
import ControlTop from "../../pages/Movie/WatchMovie/Controls/ControlTop/ControlTop";
import ControlBottom from "../../pages/Movie/WatchMovie/Controls/ControlBottom/ControlBottom";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);

function VideoPlayer({ data }) {
  const playerWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState({
    isPlaying: false,
    isEnded: false,
    volume: 1,
    isFullscreen: false,
    currentTime: 0,
    duration: videoRef?.current?.getDuration(),
    loadedSeconds: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoNextEpisode, setIsAutoNextEpisode] = useState(false);
  let timeoutId = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoStatus?.isEnded) {
      setVideoStatus({
        isPlaying: false,
        isEnded: false,
        volume: 1,
        isFullscreen: false,
        currentTime: 0,
        duration: videoRef?.current?.getDuration(),
        loadedSeconds: 0,
      });
    }
  }, [videoStatus?.isEnded]);

  const toggleVideo = () => {
    setVideoStatus((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };

  const toggleMute = () => {
    setVideoStatus((prev) => ({
      ...prev,
      volume: prev.volume === 0 ? 1 : 0,
    }));
  };

  const changeTime = (action) => {
    const currentTime = videoRef.current.getCurrentTime();
    const newTime = action === "rewind" ? currentTime - 10 : currentTime + 10;
    videoRef.current.seekTo(newTime);
    setVideoStatus((prev) => ({
      ...prev,
      currentTime: newTime,
    }));
  };

  const changeVolume = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVideoStatus((prev) => ({
      ...prev,
      volume: newVolume,
    }));
  };

  const toggleFullscreen = () => {
    if (!videoStatus.isFullscreen) {
      playerWrapperRef.current?.requestFullscreen();
      setVideoStatus((prev) => ({
        ...prev,
        isFullscreen: true,
      }));
    } else {
      document?.exitFullscreen();
      setVideoStatus((prev) => ({
        ...prev,
        isFullscreen: false,
      }));
    }
  };

  const onDuration = (duration) => {
    setVideoStatus((prev) => ({
      ...prev,
      duration: duration,
    }));
  };

  const onProgress = (state) => {
    if (videoStatus?.isPlaying) {
      setVideoStatus((prev) => ({
        ...prev,
        currentTime: state.playedSeconds,
        loadedSeconds: state.loadedSeconds,
      }));
    }
  };

  useEffect(() => {
    if (videoStatus?.isEnded) {
      if (isAutoNextEpisode) {
        const nextEpisode = parseInt(data?.episode) + 1;
        navigate(`/xem-phim/${data?.slug}?tap=${nextEpisode}`, {
          replace: true,
        });
      }
    }
  }, [
    data?.episode,
    data?.slug,
    isAutoNextEpisode,
    navigate,
    videoStatus?.isEnded,
  ]);

  const changeProgress = (event) => {
    const newTime = parseFloat(event.target.value);
    videoRef.current.seekTo(newTime);
    setVideoStatus((prev) => ({
      ...prev,
      currentTime: newTime,
    }));
  };

  useEffect(() => {
    if (videoStatus.isPlaying) {
      if (videoStatus?.currentTime > videoStatus?.loadedSeconds)
        setIsLoading(true);
      else setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [
    videoStatus?.currentTime,
    videoStatus.isPlaying,
    videoStatus?.loadedSeconds,
  ]);

  useEffect(() => {
    if (
      parseInt(videoStatus?.currentTime) === parseInt(videoStatus?.duration)
      // videoStatus?.currentTime > videoStatus?.duration
    ) {
      setVideoStatus((prev) => ({
        ...prev,
        isPlaying: false,
        isEnded: true,
      }));
    }
  }, [videoStatus?.currentTime, videoStatus?.duration]);

  const handleMouseMove = () => {
    setIsVisible(true);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId.current);
    };
  }, []);

  useEffect(() => {
    if (data?.setIsHiddenCursor) {
      data.setIsHiddenCursor(!isVisible);
    }
  }, [data, isVisible]);

  const toggleAutoNext = () => {
    setIsAutoNextEpisode(!isAutoNextEpisode);
  };

  useEffect(() => {
    console.log("🚀 ~ VideoPlayer ~ videoStatus:", videoStatus);
  }, [videoStatus]);

  return (
    <div className={cx("video__player")} ref={playerWrapperRef}>
      <div className={cx("control", "control-top", isVisible && "active")}>
        <ControlTop title={data?.ctrlTop?.title} slug={data?.slug} />
      </div>
      {isLoading && <div className={cx("loading-spinner")}></div>}
      <ReactPlayer
        ref={videoRef}
        url={data?.src}
        playing={videoStatus.isPlaying}
        width='100%'
        height='100%'
        muted={videoStatus.volume === 0}
        volume={videoStatus.volume}
        onProgress={onProgress}
        onDuration={onDuration}
      />

      <div className={cx("control", "control-bottom", isVisible && "active")}>
        <ControlBottom
          funcControl={{
            toggleVideo,
            toggleMute,
            changeTime,
            changeVolume,
            toggleFullscreen,
            changeProgress,
            toggleAutoNext,
          }}
          videoStatus={videoStatus}
          isAutoNextEpisode={isAutoNextEpisode}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
