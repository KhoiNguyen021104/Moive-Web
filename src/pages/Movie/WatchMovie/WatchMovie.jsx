import classNames from "classnames/bind";
import styles from "./WatchMovie.module.scss";
import { useParams, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { getMovieBySlugAPI } from "../../../apis/apis";
import ReactPlayer from "react-player";
import EpisodesList from "./EpisodesList/EpisodesList";
import Title from "./Title/Title";

const cx = classNames.bind(styles);

function WatchMovie() {
  const [movie, setMovie] = useState({});
  const [episodes, setEpisodes] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMore, setShowMore] = useState(false);
  const episode = searchParams.get("tap") || 1;
  const { movieSLug } = useParams();
  useEffect(() => {
    if (movieSLug) {
      const getMovie = async () => {
        const res = await getMovieBySlugAPI(movieSLug);
        setMovie(res?.movie);
        setEpisodes(res?.episodes[0]?.server_data);
      };
      getMovie();
    }
  }, [movieSLug]);

  useEffect(() => {
    if (episodes) {
      setCurrentEpisode(episodes[episode - 1]);
    }
  }, [episodes, episode]);

  useEffect(() => {
    // console.log('🚀 ~ WatchMovie ~ currentEpisode:', currentEpisode)
  }, [currentEpisode]);

  return (
    episodes && (
      <div className={cx("wrapper")}>
        <div className={cx("video")}>
          <ReactPlayer
            url={currentEpisode?.link_m3u8}
            controls
            width='100%'
            height='100%'
          />
        </div>
        <div className={cx("video__info")}>
          <div className={cx("col", "col-1")}>
            <div className={cx("row")}>
              <Title title={`${movie?.name} - ${currentEpisode?.name}`}/>
            </div>
            <div className={cx("row")}>
              <h4>{movie?.origin_name}</h4>
            </div>
            <div className={cx("row")}>
              <span>{movie?.year}</span>
              <span>{movie?.episode_current}</span>
              <span>{movie?.country[0]?.name}</span>
            </div>
            <div className={cx("row", "movie__content")}>
              <span className={cx(showMore && "more")}>{movie?.content}</span>
              <span onClick={() => setShowMore(!showMore)}>
                {showMore ? "Ẩn bớt" : "Xem thêm"}
              </span>
            </div>
          </div>
          <div className={cx("col", "col-2")}>
            <div className={cx("row")}>
              <span>Diễn viên: </span>
              <span>{movie?.actor?.map((item) => item).join(", ")}</span>
            </div>
            <div className={cx("row")}>
              <span>Đạo diễn: </span>
              <span>{movie?.director}</span>
            </div>
            <div className={cx("row")}>
              <span> Thể loại: </span>
              <span>
                {movie?.category?.map((item) => item.name).join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className={cx("episodes")}>
          <EpisodesList episodes={episodes}/>
        </div>
      </div>
    )
  );
}

export default WatchMovie;
