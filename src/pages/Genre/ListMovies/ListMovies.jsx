/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ListMovies.module.scss";
import Poster from "../../../components/Poster/Poster";

const cx = classNames.bind(styles);

function ListMovies({ listMovies }) {
  return (
    listMovies && (
      <div className={cx("list__movies")}>
        {listMovies?.map((item, index) => (
          <Poster
            key={index}
            typeImage='poster'
            height={300}
            poster={{
              poster_url: item?.poster_url,
              thumb_url: item?.thumb_url,
              name: item?.name,
              slug: item?.slug
            }}
          />
        ))}
      </div>
    )
  );
}

export default ListMovies;
