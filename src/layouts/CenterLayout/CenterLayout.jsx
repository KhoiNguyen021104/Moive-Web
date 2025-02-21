import classNames from "classnames/bind";
import styles from "./CenterLayout.module.scss";
import Header from "../../components/Header/Header";

const cx = classNames.bind(styles);

function CenterLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default CenterLayout;
