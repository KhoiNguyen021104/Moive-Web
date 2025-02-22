import classNames from "classnames/bind";
import styles from "./GenreBlock.module.scss";

const cx = classNames.bind(styles);

function GenreBlock() {
  return (
    <div className={cx("genre__block")}>
      <span className={cx("genre__name")}>Hài hước</span>
    </div>
  );
}

export default GenreBlock;
