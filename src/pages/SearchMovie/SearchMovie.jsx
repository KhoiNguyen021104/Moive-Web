import classNames from "classnames/bind";
import styles from "./SearchMovie.module.scss";
import SearchResult from "./SearchResult/SearchResult";
import SearchPopper from "./SearchPopper/SearchPopper";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { searchMovieAPI } from "../../apis/apis";

const cx = classNames.bind(styles);

function SearchMovie() {
  const [searchInput, setSearchInput] = useState("");
  const [oldSearchInput, setOldSearchInput] = useState("")
  const [searchResultsPopper, setSearchResultsPopper] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const handleOnChangeSearchInput = async (value) => {
    setSearchInput(value);
    setOldSearchInput(value);
  };

  const handleResetSearchInput = () => {
    setSearchInput("");
  };

  const handleOnClickSearch = () => {
    setSearchResults(searchResultsPopper);
    setSearchResultsPopper([]);
  };

  useEffect(() => {
    if (searchInput) {
      const searchMovie = async () => {
        const res = await searchMovieAPI({ keyword: searchInput, limit: 64 });
        setSearchResultsPopper(res?.data?.items);
      };
      searchMovie();
    } else {
      setSearchResultsPopper([]);
    }
  }, [searchInput]);

  return (
    <div className={cx("search__movie")}>
      <div className={cx("search__field")}>
        <div className={cx("search__control")}>
          <input
            value={searchInput}
            onChange={(e) => handleOnChangeSearchInput(e.target.value)}
            type='text'
            placeholder='Tìm kiếm phim...'
          />
          <button onClick={handleOnClickSearch} className={cx("btn-search")}>
            Tìm kiếm
          </button>
          {searchInput && (
            <span className={cx("btn-reset")}>
              <X onClick={handleResetSearchInput} />
            </span>
          )}
        </div>
        {searchResultsPopper?.length > 0 && (
          <div className={cx("popper")}>
            <SearchPopper searchResultsPopper={searchResultsPopper} />
          </div>
        )}
      </div>
      {searchResults?.length > 0 && (
        <div className={cx("search__result")}>
          <h2>Kết quả tìm kiếm cho: {oldSearchInput}</h2>
          <SearchResult searchResults={searchResults} />
        </div>
      )}
    </div>
  );
}

export default SearchMovie;
