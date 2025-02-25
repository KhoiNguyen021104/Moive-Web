/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./SearchPopper.module.scss";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import { slugify } from "../../../helpers/Format";

const cx = classNames.bind(styles);

function SearchPopper({ searchResultsPopper }) {
  const navigate = useNavigate()
  return (
    <ul className={cx("search__popper")}>
      {searchResultsPopper?.map((res, index) => (
        <li onClick={() => navigate(`/mo-ta-phim/${slugify(res?.name)}`)} key={index}>
          <Search />
          <span>{res?.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default SearchPopper;
