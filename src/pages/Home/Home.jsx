import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel/CategoryCarousel";
import {
  getMoviesAPI,
  getMoviesByCountryAPI,
  getMoviesByGenreAPI,
  getMoviesByTypeAPI,
} from "../../apis/apis";

const cx = classNames.bind(styles);

function Home() {
  const getMovies = async () => {
    const res1 = await getMoviesAPI({ page: 1 });
    const res2 = await getMoviesAPI({ page: 2 });
    const res3 = await getMoviesAPI({ page: 3 });
    if (res1 && res2 && res3) {
      return [...res1.items, ...res2.items, ...res3.items];
    }
  };

  return (
    <div className={cx("home")}>
      <div className={cx("carousel")}>
        <CategoryCarousel
          data={{
            size: "medium",
            funcAPI: getMovies,
            title: "Mới ra mắt",
          }}
        />
        <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByTypeAPI,
            params: {
              type_list: "phim-bo",
              limit: 30,
            },
            title: "Phim bộ hot",
          }}
        />
        <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByTypeAPI,
            params: {
              type_list: "phim-le",
              limit: 30,
            },
            title: "Phim lẻ nổi bật",
          }}
        />
        <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByCountryAPI,
            params: {
              type_list: "viet-nam",
              limit: 30,
            },
            title: "Phim Việt không thể bỏ lỡ",
          }}
        />
        <CategoryCarousel
          data={{
            size: "medium",
            funcAPI: getMoviesByTypeAPI,
            params: {
              type_list: "tv-shows",
              limit: 30,
            },
            title: "TV Shows",
          }}
        />
        <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByGenreAPI,
            params: {
              type_list: "tinh-cam",
              limit: 30,
            },
            title: "Muôn vàn sắc thái tình yêu",
          }}
        />

        <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByTypeAPI,
            params: {
              type_list: "hoat-hinh",
              limit: 30,
            },
            title: "Anime hot",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
