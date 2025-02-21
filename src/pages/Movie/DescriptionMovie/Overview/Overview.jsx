/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Overview.module.scss";
import { Clapperboard } from "lucide-react";
import ReactPlayer from "react-player";

const cx = classNames.bind(styles);

function Overview({ movie }) {
  return (
    <div className={cx("movie__overview")}>
      <div className={cx("movie__name")}>
        {/* <Clapperboard /> */}
        {movie?.name}
      </div>
      {movie?.trailer_url && (
        <div className={cx("row", "movie__trailer")}>
          <div className={cx("item")}>
            <span>Trailer</span>
            <span></span>
          </div>
          <ReactPlayer
            url={movie?.trailer_url}
            controls
            width='100%'
            height='100%'
          />
        </div>
      )}
      <div className={cx("row")}>
        <div className={cx("tag")}>{movie?.year}</div>
        <div className={cx("tag")}>{movie?.episode_total} tập</div>
        <div className={cx("tag", "video__quality")}>{movie?.quality}</div>
      </div>
      <div className={cx("row")}>
        <div className={cx("item")}>
          <span>Thể loại: </span>
          <span>{movie?.category?.map((item) => item.name).join(", ")}</span>
        </div>
      </div>
      <div className={cx("row")}>
        <div className={cx("item", "movie__content")}>
          <span>Nội dung: </span>
          <span>{movie?.content}</span>
        </div>
      </div>

      {/* <div className={cx("row")}>
        <button className={cx("btn__play")}>
          <Play />
          Xem phim
        </button>
      </div> */}
    </div>
  );
}

export default Overview;
