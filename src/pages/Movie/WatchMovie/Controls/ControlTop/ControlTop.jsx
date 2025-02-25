/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ControlTop.module.scss";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);

function ControlTop({ title, slug }) {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(`/mo-ta-phim/${slug}`)
  };
  return (
    <>
      <div className={cx("left")}>
        <ArrowLeft onClick={handleBack} />
        <span>{title}</span> 
      </div>
      <div className={cx("right")}>
        <img src='\src\assets\imgs\logo.png' alt='' />
      </div>
    </>
  );
}

export default ControlTop;
