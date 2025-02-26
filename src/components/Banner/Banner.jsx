import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { getMoviesAPI } from "../../apis/apis";
import { Bookmark, Heart, Play } from "lucide-react";
import { useNavigate } from "react-router";
import { slugify } from "../../helpers/Format";

const cx = classNames.bind(styles);

function Banner() {
  const settings = {
    isFinite: true,
    dots: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };
  const [movies, setMovies] = useState([]);
  const [isMark, setIsMark] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      getMoviesAPI;
      const res = await getMoviesAPI({ page: 6 });
      setMovies(res?.items);
    };
    fetch();
  }, []);
  return (
    movies?.length >
    0(
      <div className={cx("banner_wrapper")}>
        <Carousel {...settings} autoplay>
          {movies?.map((item, index) => (
            <div className={cx("slide")} key={index}>
              <img src={item?.thumb_url} alt='' />
              <div className={cx("banner__info")}>
                <h1>{item?.name}</h1>
                <div className={cx("btn__group")}>
                  <button
                    onClick={() =>
                      navigate(`/mo-ta-phim/${slugify(item?.name)}`)
                    }
                    className={cx("btn", "btn-play")}
                  >
                    <Play />
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => setIsMark((prev) => !prev)}
                    className={cx("btn", "btn-save")}
                  >
                    <Bookmark className={cx(isMark && "active")} />
                  </button>
                  <button
                    onClick={() => setIsLike((prev) => !prev)}
                    className={cx("btn", "btn-like")}
                  >
                    <Heart className={cx(isLike && "active")} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  );
}

export default Banner;
