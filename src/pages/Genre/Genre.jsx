import classNames from "classnames/bind";
import styles from "./Genre.module.scss";
import GenreBlock from "./GenreBlock/GenreBlock";
import { useEffect, useMemo, useState } from "react";
import ListMovies from "./ListMovies/ListMovies";
import { getMoviesByGenreAPI } from "../../apis/apis";

import { slugify } from "../../helpers/Format";
import { useNavigate, useSearchParams } from "react-router";

const cx = classNames.bind(styles);

function Genre() {
  const movieGenres = useMemo(
    () => [
      { title: "Gia đình", image: "/src/assets/imgs/genres/gia-dinh.png" },
      { title: "Tâm lý", image: "/src/assets/imgs/genres/tam-li.png" },
      { title: "Hành động", image: "/src/assets/imgs/genres/hanh-dong.png" },
      { title: "Hài", image: "/src/assets/imgs/genres/hai-huoc.png" },
      { title: "Võ thuật", image: "/src/assets/imgs/genres/vo-thuat.png" },
      { title: "Lãng mạn", image: "/src/assets/imgs/genres/tinh-cam.png" },
      { title: "Tài liệu", image: "/src/assets/imgs/genres/tai-lieu.png" },
      { title: "Cổ trang", image: "/src/assets/imgs/genres/co-trang.png" },
      { title: "Kinh dị", image: "/src/assets/imgs/genres/kinh-di.png" },
      {
        title: "Khoa học",
        image: "/src/assets/imgs/genres/vien-tuong.png",
      },
      {
        title: "Anime",
        image: "/src/assets/imgs/genres/anime.png",
      },
      {
        title: "Kinh điển",
        image: "/src/assets/imgs/genres/kinh-dien.png",
      },
      {
        title: "Lịch sử",
        image: "/src/assets/imgs/genres/lich-su.png",
      },
      {
        title: "Bí ẩn",
        image: "/src/assets/imgs/genres/bi-an.png",
      },
    ],
    []
  );

  const [listMovies, setListMovies] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [genre, setGenre] = useState();

  useEffect(() => {
    const param = searchParams.get("the-loai");
    if (param) {
      setGenre(param);
    }
  }, [searchParams]);

  const handleSelectGenre = (value) => {
    const slugifiedValue = slugify(value);
    navigate(`/the-loai?the-loai=${slugifiedValue}`, { replace: true });
  };

  useEffect(() => {
    const param = searchParams.get("the-loai");
    if (param) {
      setGenre(param);
    } else {
      const defaultGenre = slugify(movieGenres[0]?.title);
      setGenre(defaultGenre);
      setSearchParams(
        new URLSearchParams({
          the_loai: defaultGenre,
        })
      );
    }
  }, [searchParams, movieGenres, setSearchParams]);

  useEffect(() => {
    if (genre) {
      const fetchListMovies = async () => {
        const res = await getMoviesByGenreAPI({
          type_list: genre,
          limit: 64,
        });
        console.log("🚀 ~ fetchListMovies ~ res:", res);
        setListMovies(res?.items);
      };
      fetchListMovies();
    }
  }, [genre]);

  return (
    <>
      <div className={cx("genre__wrapper")}>
        <h2>Danh sách thể loại</h2>
        <div className={cx("genre__list")}>
          {movieGenres.map((item, index) => (
            <GenreBlock
              key={index}
              props={{
                title: item?.title,
                image: item?.image,
                isSelected: slugify(genre) === slugify(item?.title),
                handleSelectGenre: handleSelectGenre,
              }}
            />
          ))}
        </div>
        <div className={cx("genre__movies")}>
          <h2>Có thể bạn quan tâm</h2>
          <div className={cx("genre__list_movie")}>
            <ListMovies listMovies={listMovies} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Genre;
