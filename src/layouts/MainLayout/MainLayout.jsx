/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Header from "../../components/Header/Header";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  const headerRef = useRef();
  const mainRef = useRef();
  const footerRef = useRef();
  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight;
    mainRef.current.style.minHeight = `calc(110vh - ${headerHeight}px)`;
  }, []);

  return (
    <div className={cx("wrapper")}>
      <header ref={headerRef}>
        <Header />
      </header>
      <main ref={mainRef}>{children}</main>
      <footer ref={footerRef}>{/* <Footer /> */}</footer>
    </div>
  );
}

export default MainLayout;
