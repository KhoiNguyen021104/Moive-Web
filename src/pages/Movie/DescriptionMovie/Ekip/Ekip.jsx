/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Ekip.module.scss";

const cx = classNames.bind(styles);

function Ekip({ ekip }) {
  return (
    ekip && (
      <div className={cx("movie__ekip")}>
        <div className={cx("col")}>
          <span className={cx("title")}>Đạo diễn</span>
          <span className={cx("content")}>{ekip?.director}</span>
        </div>
        <div className={cx("col")}>
          <span className={cx("title")}>Diễn viên</span>
          {ekip?.actors?.map((actor, index) => (
            <span key={index} className={cx("content")}>
              {actor}
            </span>
          ))}
        </div>
        <div className={cx("col")}>
          <span className={cx("title")}>Thể loại</span>
          {ekip?.categories?.map((category, index) => (
            <span key={index} className={cx("content")}>
              {category?.name}
            </span>
          ))}
        </div>
        {/* <div classNam
        {/* <div classNam
        e={cx("col")}>
        <span className={cx('title')}>Đạo diễn</span>
        <span className={cx('content')}>{ekip?.director}</span>
       </div> */}
      </div>
    )
  );
}

export default Ekip;
