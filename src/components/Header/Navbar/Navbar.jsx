import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

import { ChevronDown, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllCountriesAPI, getAllTypeMoviesAPI } from "../../../apis/apis";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function Navbar() {
  const [typeMovies, setTypeMovies] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchTypeMovies = async () => {
      const res = await getAllTypeMoviesAPI();
      let copyRes = [...res];
      let newState = [];

      if (copyRes.length < 9) {
        newState = [copyRes];
      } else {
        while (copyRes.length > 0) {
          newState.push(copyRes.slice(0, 8));
          copyRes.splice(0, 8);
        }
      }
      setTypeMovies(newState);
    };

    fetchTypeMovies();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getAllCountriesAPI();
      res.pop();
      res.pop();
      let copyRes = [...res];
      let newState = [];

      if (copyRes.length < 9) {
        newState = [copyRes];
      } else {
        while (copyRes.length > 0) {
          newState.push(copyRes.slice(0, 8));
          copyRes.splice(0, 8);
        }
      }
      setCountries(newState);
    };

    fetchCountries();
  }, []);

  return (
    <nav className={cx("navbar-wrapper")}>
      <ul>
        <li className={cx("active")}>Trang chủ</li>
        <li>TV shows</li>
        <li>Phim lẻ</li>
        <li>Phim bộ</li>
        <li>
          Thể loại
          <ChevronDown />
          {typeMovies?.length > 0 && (
            <ul className={cx("subnav")}>
              {typeMovies?.map((parts, index) => (
                <div key={index} className={cx("subnav-col")}>
                  {parts?.map((type) => (
                    <a href={type?.slug} key={type?._id}>
                      {/* <li>Phim {type?.name?.toLowerCase()}</li> */}
                      <li>{type?.name}</li>
                    </a>
                  ))}
                </div>
              ))}
            </ul>
          )}
        </li>
        <li>
          Quốc gia
          <ChevronDown />
          {countries?.length > 0 && (
            <ul className={cx("subnav")}>
              {countries?.map((parts, index) => (
                <div key={index} className={cx("subnav-col")}>
                  {parts?.map((type) => (
                    <a href={type?.slug} key={type?._id}>
                      <li>{type?.name}</li>
                    </a>
                  ))}
                </div>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div className={cx("navbar-right")}>
        {/* <div className={cx("search-field")}>
          <input type='text' placeholder='Tìm kiếm phim...' />
          <button>
            <Search />
          </button>
        </div> */}
        <button className={cx("btn-search")}>
          <Search />
        </button>
        <button className={cx("btn-login")}>Đăng nhập</button>
      </div>
    </nav>
  );
}

export default Navbar;
