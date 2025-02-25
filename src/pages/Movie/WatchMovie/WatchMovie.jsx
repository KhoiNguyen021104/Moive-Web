import classNames from "classnames/bind";
import styles from "./WatchMovie.module.scss";
import { useParams, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { getMovieBySlugAPI } from "../../../apis/apis";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
// import EpisodesList from "./EpisodesList/EpisodesList";
// import Title from "./Title/Title";

const cx = classNames.bind(styles);

function WatchMovie() {
  const [movie, setMovie] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieSLug } = useParams();
  const [isHiddenCursor, setIsHiddenCursor] = useState(false);
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
    const param = searchParams.get("tap") || 1;
    setEpisode(param);
  }, [searchParams]);

  return (
    episodes && (
      <div className={cx("video", isHiddenCursor && "hidden-cursor")}>
        <VideoPlayer
          src={currentEpisode?.link_m3u8}
          data={{
            slug: movie?.slug,
            ctrlTop: {
              title: episodes?.length !== 1 ? `${movie?.name} - ${currentEpisode?.name}` : `${movie?.name}`,
            },
            ctrlBottom: {},
            src: currentEpisode?.link_m3u8,
            setIsHiddenCursor,
            episode,
            episodeTotal: episodes?.length
          }}
        />
      </div>
    )
  );
}

export default WatchMovie;
