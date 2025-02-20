/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Poster.module.scss";

const cx = classNames.bind(styles);

function Poster({ poster, height, typeImage }) {
  return (
    <div className={cx("poster")}>
      <img
        height={height}
        src={typeImage === "poster" ? poster?.poster_url : poster?.thumb_url}
        alt=''
      />
      <div className={cx("poster__title")}>{poster?.name}</div>
    </div>
  );
}

export default Poster;
