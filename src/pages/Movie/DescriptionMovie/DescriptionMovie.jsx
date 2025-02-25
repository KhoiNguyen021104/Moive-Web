import classNames from "classnames/bind";
import styles from "./DescriptionMovie.module.scss";
import { useEffect, useState } from "react";
import { getMovieBySlugAPI, getMoviesByTypeAPI } from "../../../apis/apis";
import Overview from "./Overview/Overview";
import { Bookmark, Clapperboard, Heart, Play } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import Trailer from "./Trailer/Trailer";
import Ekip from "./Ekip/Ekip";
import CategoryCarousel from "../../../components/Carousel/CategoryCarousel/CategoryCarousel";
import EpisodesCarousel from "../../../components/Carousel/EpisodesCarousel/EpisodesCarousel";

const cx = classNames.bind(styles);

function DescriptionMovie() {
  const [movie, setMovie] = useState(null);
  console.log("🚀 ~ DescriptionMovie ~ movie:", movie);
  const [isMark, setIsMark] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    const slug =
      location?.pathname?.split("/")[location.pathname.split("/").length - 1];
    if (slug) {
      const getMovie = async () => {
        const res = await getMovieBySlugAPI(slug);
        setMovie(res);
      };
      getMovie();
    }
  }, [location.pathname]);

  const handleBookMarkVideo = async () => {
    setIsMark(!isMark);
  };

  const handleLikeVideo = async () => {
    setIsLike(!isLike);
  };

  const handleNavigate = () => {
    navigate(`/xem-phim/${movie?.movie?.slug}`);
  };

  return (
    movie && (
      <>
        <div
          className={cx("movie__desc__wrapper", isActive === 1 && "overlay")}
        >
          <div className={cx("movie__desc__content")}>
            <div className={cx("movie__name")}>
              <Clapperboard />
              {movie?.movie?.name}
            </div>
            {isActive === 0 && <Overview movie={movie?.movie} />}
            {isActive === 1 && <Trailer trailer={movie?.movie?.trailer_url} />}
            {isActive === 2 && (
              <Ekip
                ekip={{
                  director: movie?.movie?.director,
                  actors: movie?.movie?.actor,
                  categories: movie?.movie?.category,
                }}
              />
            )}
            {isActive === 0 && (
              <div className={cx("control")}>
                <button
                  onClick={handleNavigate}
                  className={cx("btn", "btn-play")}
                >
                  <Play />
                  Xem phim
                </button>
                <button
                  onClick={handleBookMarkVideo}
                  className={cx("btn", "btn-save")}
                >
                  <Bookmark className={cx(isMark && "active")} />
                </button>
                <button
                  onClick={handleLikeVideo}
                  className={cx("btn", "btn-like")}
                >
                  <Heart className={cx(isLike && "active")} />
                </button>
              </div>
            )}
          </div>
          <div className={cx("movie__thumbnail")}>
            <div className={cx("thumbnail__overlay-left")}></div>
            <img src={movie?.movie?.thumb_url} alt='' />
          </div>
          <div className={cx("detail__menu")}>
            <ul>
              <li
                onClick={() => setIsActive(0)}
                className={cx(isActive === 0 && "active")}
              >
                Tổng quan
              </li>
              <li
                onClick={() => setIsActive(1)}
                className={cx(isActive === 1 && "active")}
              >
                Trailer
              </li>
              <li
                onClick={() => setIsActive(2)}
                className={cx(isActive === 2 && "active")}
              >
                Chi tiết
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("carousel")}>
          {movie?.movie?.type === "series" && (
            <EpisodesCarousel
              data={{
                size: "small",
                episodes: movie?.episodes[0]?.server_data,
                slug: movie?.movie?.slug,
                title: "Danh sách tập phim",
                image: movie?.movie?.thumb_url,
              }}
            />
          )}
          <CategoryCarousel
            data={{
              size: "medium",
              funcAPI: getMoviesByTypeAPI,
              params: {
                type_list: "phim-bo",
                country: movie?.movie?.country[0]?.name,
                category: movie?.movie?.category[0]?.slug,
                limit: 20,
              },
              title: "Phim liên quan",
              except: {
                key: "_id",
                value: movie?.movie?._id,
              },
            }}
          />
        </div>
      </>
    )
  );
}

export default DescriptionMovie;
