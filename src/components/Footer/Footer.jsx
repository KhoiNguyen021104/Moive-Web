import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FacebookIcon, Instagram, Youtube } from "lucide-react";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer", "w-full")}>
        <FacebookIcon width={50} height={50}/>
        <Instagram width={50} height={50}/>
        <Youtube width={50} height={50}/>
    </div>
  );
}

export default Footer;
