/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Header from "../../components/Header/Header";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  const headerRef = useRef();
  const mainRef = useRef();
  const footerRef = useRef();
  const location = useLocation().pathname;
  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight;
    mainRef.current.style.minHeight = `calc(110vh - ${headerHeight}px)`;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (location === "/") {
        if (window.scrollY >= 400) {
          headerRef.current.classList.add(cx("bg-black"));
        } else {
          headerRef.current.classList.remove(cx("bg-black"));
        }
      } else {
        headerRef.current.classList.add(cx("bg-black"));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <div className={cx("wrapper")}>
      <header
        style={{
          backgroundColor:
            location === "/"
              ? "background: rgba(0,0,0, .2);"
              : "background: rgba(0,0,0, .2);",
        }}
        ref={headerRef}
      >
        <Header />
      </header>
      <main
        style={{
          paddingTop: location === "/" ? "0" : "90px",
        }}
        ref={mainRef}
      >
        {children}
      </main>
      <footer ref={footerRef}><Footer /></footer>
    </div>
  );
}

export default MainLayout;
