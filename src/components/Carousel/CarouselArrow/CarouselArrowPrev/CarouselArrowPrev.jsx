/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./CarouselArrowPrev.module.scss";
import { ChevronLeft } from "lucide-react";

const cx = classNames.bind(styles);

const CarouselArrowPrev = (props) => {
  return (
    <div
      style={{ height: props?.height }}
      className={cx(
        "custom-arrow",
        "prev-arrow",
        props?.currentSlide === 0 && "hidden"
      )}
      onClick={props.onClick}
    >
      <ChevronLeft />
    </div>
  );
};

export default CarouselArrowPrev;
