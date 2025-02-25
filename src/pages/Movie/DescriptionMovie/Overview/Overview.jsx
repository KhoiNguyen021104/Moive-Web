/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Overview.module.scss";

const cx = classNames.bind(styles);

function Overview({ movie }) {
  console.log("🚀 ~ Overview ~ movie:", movie);
  return (
    <div className={cx("movie__overview")}>
      <div className={cx("row")}>
        <div className={cx("tag")}>{movie?.year}</div>
        <div className={cx("tag")}>
          {movie?.type === "single"
            ? movie?.time
            : `${movie?.episode_total} tập`}
        </div>
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
