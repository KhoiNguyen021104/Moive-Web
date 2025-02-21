/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Poster.module.scss";
import { createImageURL } from "../../helpers/CreateImgaeURL";
import { Play } from "lucide-react";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);

function Poster({ poster, height, typeImage }) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/mo-ta-phim/${poster?.slug}`)
  }

  return (
    <div className={cx("poster")}>
      <div onClick={handleNavigate} className={cx("image")}>
        <img
          height={height}
          src={
            typeImage === "poster"
              ? createImageURL(poster?.poster_url)
              : createImageURL(poster?.thumb_url)
          }
          alt=''
        />
        <Play />
      </div>
      <div className={cx("poster__title")}>{poster?.name}</div>
    </div>
  );
}

export default Poster;
