import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate()
  return (
    <div className={cx("header")}>
      <div className={cx("header__logo")}>
        <img onClick={() => navigate('/')} width={125} src='\src\assets\imgs\logo.png' alt=''/>
      </div>
      <div className={cx("navbar")}>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
