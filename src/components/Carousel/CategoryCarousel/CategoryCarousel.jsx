/* eslint-disable react/prop-types */
import { Carousel } from "antd";
import classNames from "classnames/bind";
import styles from "./CategoryCarousel.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Poster from "../../Poster/Poster";
import CarouselTitle from "../CarouselTitle/CarouselTitle";

const cx = classNames.bind(styles);

function CategoryCarousel({ data }) {
  const [category, setCategory] = useState([]);
  const [carouselProps, setCarouselProps] = useState({});
  useEffect(() => {
    switch (data?.size) {
      case "small":
        setCarouselProps({
          height: 115,
          slidesToScroll: 5,
          slidesToShow: 5.2,
          typeImage: "thumbnail",
        });
        break;
      case "medium":
        setCarouselProps({
          height: 200,
          slidesToScroll: 3,
          slidesToShow: 3.2,
          typeImage: "thumbnail",
        });
        break;
      case "large":
        setCarouselProps({
          height: 300,
          slidesToScroll: 5,
          slidesToShow: 5.2,
          typeImage: "poster",
        });
        break;
    }
  }, [data?.size]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: carouselProps?.slidesToShow,
    slidesToScroll: carouselProps?.slidesToScroll,
    arrows: true,
    draggable: false,
    prevArrow: (
      <CustomPrevArrow
        slidesToShow={carouselProps?.slidesToShow}
        height={carouselProps?.height}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        slidesToShow={carouselProps?.slidesToShow}
        height={carouselProps?.height}
      />
    ),
  };

  useEffect(() => {
    if (data?.funcAPI) {
      const fetchAPI = async () => {
        const res = await data?.funcAPI({ ...data?.params });
        setCategory(res.items ? res.items : res);
        console.log("🚀 ~ fetchAPI ~ res:", res);
      };
      fetchAPI();
    }
  }, [data]);

  return (
    category?.length > 0 && (
      <div className={cx("wrapper")}>
        <CarouselTitle title={data?.title}/>
        <div className={cx("carousel-wrapper")}>
          <Carousel {...settings}>
            {category.map((item) => (
              <div key={item} className={cx("slider-item")}>
                <Poster
                  poster={item}
                  height={carouselProps?.height}
                  typeImage={carouselProps?.typeImage}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    )
  );
}

const CustomPrevArrow = (props) => {
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

const CustomNextArrow = (props) => {
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

export default CategoryCarousel;
