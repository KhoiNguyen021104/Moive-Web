/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Trailer.module.scss";
import ReactPlayer from "react-player";

const cx = classNames.bind(styles);

function Trailer({ trailer }) {
  return (
    trailer && (
      <div className={cx("movie__trailer")}>
        <ReactPlayer
          url={trailer}
          controls
          width='100%'
          height='100%'
        />
      </div>
    )
  );
}

export default Trailer;
