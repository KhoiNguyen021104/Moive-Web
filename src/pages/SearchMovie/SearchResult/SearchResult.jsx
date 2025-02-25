/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./SearchResult.module.scss";
import Poster from "../../../components/Poster/Poster";

const cx = classNames.bind(styles);

function SearchResult({ searchResults }) {
  return (
    searchResults && (
      <div className={cx("search__result__wrapper")}>
        {searchResults.map((item, index) => (
           <Poster
           key={index}
           typeImage='thumbnail'
           height={150}
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

export default SearchResult;
