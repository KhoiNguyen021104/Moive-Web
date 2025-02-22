import classNames from "classnames/bind";
import styles from "./Genre.module.scss";

const cx = classNames.bind(styles);

function Genre() {
  return <div className={cx("genre__wrapper")}></div>;
}

export default Genre;
