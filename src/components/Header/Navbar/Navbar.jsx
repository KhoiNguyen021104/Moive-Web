import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

import { ChevronDown, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllCountriesAPI, getAllMovieGenreAPI } from "../../../apis/apis";
import { Link, useLocation, useNavigate } from "react-router";

const cx = classNames.bind(styles);

function Navbar() {
  const [movieGenres, setMovieGenre] = useState([]);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  useEffect(() => {
    const fetchAllMovieGenres = async () => {
      const res = await getAllMovieGenreAPI();
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
      setMovieGenre(newState);
    };

    fetchAllMovieGenres();
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
        <li className={cx(pathname === "/" && "active")}>
          <Link to='/'>Trang chủ</Link>
        </li>
        <li className={cx(pathname?.includes("/phim-bo") && "active")}>
          <Link to='phim-bo'>Phim bộ</Link>
        </li>
        <li className={cx(pathname?.includes("/phim-le") && "active")}>
          <Link to='/phim-le'>Phim lẻ</Link>
        </li>
        <li className={cx(pathname?.includes("/anime") && "active")}>
          <Link to='/anime'>Anime</Link>
        </li>
        <li className={cx(pathname?.includes("/the-loai") && "active")}>
          <Link to='/the-loai'>Thể loại</Link>
          {/* <ChevronDown />
          {movieGenres?.length > 0 && (
            <ul className={cx("subnav")}>
              {movieGenres?.map((parts, index) => (
                <div key={index} className={cx("subnav-col")}>
                  {parts?.map((type) => (
                    <Link to={type?.slug} key={type?._id}>
                      <li>{type?.name}</li>
                    </Link>
                  ))}
                </div>
              ))}
            </ul>
          )} */}
        </li>
        {/* <li>
          Quốc gia */}
          {/* <ChevronDown />
          {countries?.length > 0 && (
            <ul className={cx("subnav")}>
              {countries?.map((parts, index) => (
                <div key={index} className={cx("subnav-col")}>
                  {parts?.map((type) => (
                    <Link to={type?.slug} key={type?._id}>
                      <li>{type?.name}</li>
                    </Link>
                  ))}
                </div>
              ))}
            </ul>
          )} */}
        {/* </li> */}
      </ul>
      <div className={cx("navbar-right")}>
        {/* <div className={cx("search-field")}>
          <input type='text' placeholder='Tìm kiếm phim...' />
          <button>
            <Search />
          </button>
        </div> */}
        <button
          className={cx("btn-search")}
          onClick={() => navigate("/tim-kiem")}
        >
          <Search />
        </button>
        <button onClick={() => navigate('/dang-nhap')} className={cx("btn-login")}>Đăng nhập</button>
      </div>
    </nav>
  );
}

export default Navbar;
