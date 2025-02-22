/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./CarouselArrowNext.module.scss";
import { ChevronRight } from "lucide-react";

const cx = classNames.bind(styles);

const CarouselArrowNext = (props) => {
  return (
    <div
      style={{ height: props?.height }}
      className={cx(
        "custom-arrow",
        "next-arrow",
        props?.currentSlide === props?.slideCount - props?.slidesToShow &&
          "hidden"
      )}
      onClick={props.onClick}
    >
      <ChevronRight />
    </div>
  );
};

export default CarouselArrowNext;
