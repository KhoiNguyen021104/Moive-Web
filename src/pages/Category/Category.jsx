import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel/CategoryCarousel";
import { getMoviesByCountryAPI, getMoviesByGenreAPI, getMoviesByTypeAPI } from "../../apis/apis";

const cx = classNames.bind(styles);

function Category() {
  return (
    <div className={cx("category")}>
      <div className={cx("carousel")}>
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
            funcAPI: getMoviesByGenreAPI,
            params: {
              type_list: "tinh-cam",
              limit: 30,
            },
            title: "Phim hay cho người cô đơn",
          }}
        />
        <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByGenreAPI,
            params: {
              type_list: "co-trang",
              limit: 30,
            },
            title: "Top phim Hoa ngữ bạo đỏ",
          }}
        />
         <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByCountryAPI,
            params: {
              type_list: "han-quoc",
              limit: 30,
            },
            title: "Những tựa phim Hàn xem là dính",
          }}
        />
         <CategoryCarousel
          data={{
            size: "large",
            funcAPI: getMoviesByTypeAPI,
            params: {
              type_list: "phim-bo",
              limit: 30,
              country: "viet-nam"
            },
            title: "Phim bộ Việt Nam đặc sắc",
          }}
        />
      </div>
    </div>
  );
}

export default Category;
