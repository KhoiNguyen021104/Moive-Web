import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ title }) {
  return (
    <div className={cx("title__wrapper")}>
      <span>{title}</span>
    </div>
  );
}

export default Title;
