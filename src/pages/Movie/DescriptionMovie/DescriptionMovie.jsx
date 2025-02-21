import classNames from "classnames/bind";
import styles from "./DescriptionMovie.module.scss";
import { useEffect, useState } from "react";
import { getMovieBySlugAPI } from "../../../apis/apis";
import Overview from "./Overview/Overview";
import { Play } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const cx = classNames.bind(styles);

function DescriptionMovie() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const slug =
    location?.pathname?.split("/")[location.pathname.split("/").length - 1];

  useEffect(() => {
    if (slug) {
      const getMovie = async () => {
        const res = await getMovieBySlugAPI(slug);
        setMovie(res);
      };
      getMovie();
    }
  }, [slug]);

  const handleNavigate = () => {
    navigate(`/xem-phim/${slug}`);
  };

  return (
    movie && (
      <div className={cx("movie__desc__wrapper")}>
        <Overview movie={movie?.movie} />
        <div className={cx("movie__thumbnail")}>
          <div className={cx("thumbnail__overlay-left")}></div>
          <div
            className={cx("thumbnail__overlay-full")}
            onClick={handleNavigate}
          >
            <Play />
          </div>
          <img src={movie?.movie?.thumb_url} alt='' />
        </div>
        <div className={cx("detail__menu")}>
          <ul>
            <li>Tổng quan</li>
            <li>Trailer</li>
            <li>Tập phim</li>
            <li>Chi tiết</li>
          </ul>
        </div>
      </div>
    )
  );
}

export default DescriptionMovie;
