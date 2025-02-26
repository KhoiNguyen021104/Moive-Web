/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Poster.module.scss";
import { createImageURL } from "../../helpers/CreateImageURL";
import { Play } from "lucide-react";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);

function Poster({ poster, height, typeImage, slug, action = "" }) {
  console.log('🚀 ~ Poster ~ poster:', poster)
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (action === "watch") {
      const episode = poster?.name?.match(/\d+/g).map(Number);
      console.log('🚀 ~ handleNavigate ~ episode:', episode)
      navigate(`/xem-phim/${slug}?tap=${episode}`);
    }
    else navigate(`/mo-ta-phim/${slug}`);
  };

  return (
    <div className={cx("poster")}>
      <div onClick={handleNavigate} className={cx("image")}>
        <img
          style={{
            "--height": `${height}px`,
          }}
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
