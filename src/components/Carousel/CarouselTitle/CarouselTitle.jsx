/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./CarouselTitle.module.scss";

const cx = classNames.bind(styles);

function CarouselTitle({ title }) {
  return (
    <div className={cx("carousel__title")}>
      <h2>{title}</h2>
      <a href=''>Xem tất cả</a>
    </div>
  );
}

export default CarouselTitle;
