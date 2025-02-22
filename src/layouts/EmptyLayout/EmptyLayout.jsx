/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./EmptyLayout.module.scss";

const cx = classNames.bind(styles);

function EmptyLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      {children}
    </div>
  );
}

export default EmptyLayout;
