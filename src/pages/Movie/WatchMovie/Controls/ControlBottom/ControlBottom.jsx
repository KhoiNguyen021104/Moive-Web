/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ControlBottom.module.scss";
import {
  Maximize,
  Minimize,
  PauseCircle,
  PlayCircle,
  RotateCcw,
  RotateCw,
  Settings,
  Volume2,
  VolumeX,
} from "lucide-react";
import { formatVideoTime } from "../../../../../helpers/Format";
import { Switch } from "antd";
const cx = classNames.bind(styles);

function ControlBottom({
  funcControl,
  videoStatus,
  isAutoNextEpisode,
  episodeTotal,
}) {
  return (
    <>
      <div className={cx("video-progress")}>
        <span>{formatVideoTime(videoStatus?.currentTime)}</span>
        <input
          style={{
            "--progress-percent": `${
              (videoStatus?.currentTime / videoStatus?.duration) * 100
            }%`,
            "--thumb-size": `${
              (videoStatus?.currentTime / videoStatus?.duration) * 10 + 10
            }px`,
          }}
          type='range'
          min='0'
          max={videoStatus?.duration || 100}
          value={videoStatus?.currentTime}
          step='0.1'
          className={cx("progress__slider")}
          width={"100%"}
          onChange={funcControl?.changeProgress}
          onMouseUp={funcControl?.handleSeekEnd}
          onTouchEnd={funcControl?.handleSeekEnd}
        />
        <span>{formatVideoTime(videoStatus?.duration)}</span>
      </div>
      <div className={cx("control__items")}>
        <div className={cx("btn-control")}>
          <button onClick={() => funcControl?.changeTime("rewind")}>
            <RotateCcw />
          </button>
          <button onClick={funcControl?.toggleVideo}>
            {videoStatus?.isPlaying ? <PauseCircle /> : <PlayCircle />}
          </button>
          <button onClick={() => funcControl?.changeTime("forward")}>
            <RotateCw />
          </button>
          <button onClick={funcControl?.toggleMute}>
            {videoStatus?.volume === 0 ? <VolumeX /> : <Volume2 />}
          </button>
          <input
            style={{
              "--volume-percent": `${videoStatus?.volume * 100}%`,
            }}
            type='range'
            min='0'
            max='1'
            step='0.05'
            value={videoStatus?.volume}
            onChange={funcControl?.changeVolume}
            className={cx("volume-slider")}
          />
        </div>
        <div className={cx("btn-control")}>
          {episodeTotal > 1 && (
            <div className={cx("switch", isAutoNextEpisode ? "on" : "off")}>
              <Switch
                defaultChecked={isAutoNextEpisode}
                onChange={funcControl?.toggleAutoNext}
              />
            </div>
          )}
          <button>
            <Settings />
          </button>
          <button onClick={funcControl?.toggleFullscreen}>
            {videoStatus?.isFullscreen ? <Minimize /> : <Maximize />}
          </button>
        </div>
      </div>
    </>
  );
}

export default ControlBottom;
