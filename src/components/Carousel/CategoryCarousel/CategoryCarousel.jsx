/* eslint-disable react/prop-types */
import { Carousel } from "antd";
import classNames from "classnames/bind";
import styles from "./CategoryCarousel.module.scss";
import { useEffect, useState } from "react";
import Poster from "../../Poster/Poster";
import CarouselTitle from "../CarouselTitle/CarouselTitle";
import CarouselArrowPrev from "../CarouselArrow/CarouselArrowPrev/CarouselArrowPrev";
import CarouselArrowNext from "../CarouselArrow/CarouselArrowNext/CarouselArrowNext";

const cx = classNames.bind(styles);

function CategoryCarousel({ data }) {
  const [category, setCategory] = useState([]);
  const [carouselProps, setCarouselProps] = useState({});
  useEffect(() => {
    switch (data?.size) {
      case "small":
        setCarouselProps({
          height: 150,
          slidesToScroll: 5,
          slidesToShow: 5.2,
          typeImage: "thumbnail",
        });
        break;
      case "medium":
        setCarouselProps({
          height: 250,
          slidesToScroll: 3,
          slidesToShow: 3.2,
          typeImage: "thumbnail",
        });
        break;
      case "large":
        setCarouselProps({
          height: 520,
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
      <CarouselArrowPrev
        slidesToShow={carouselProps?.slidesToShow}
        height={carouselProps?.height}
      />
    ),
    nextArrow: (
      <CarouselArrowNext
        slidesToShow={carouselProps?.slidesToShow}
        height={carouselProps?.height}
      />
    ),
  };

  useEffect(() => {
    if (data?.funcAPI) {
      const fetchAPI = async () => {
        const res = await data?.funcAPI({ ...data?.params });
        const newState = res.items ? res.items : res;
        setCategory(() =>
          data?.except
            ? newState?.filter(
                (item) => item[data?.except?.key] !== data?.except?.value
              )
            : newState
        );
      };
      fetchAPI();
    }
  }, [data]);

  return (
    category?.length > 0 && (
      <div className={cx("wrapper")}>
        <CarouselTitle title={data?.title} />
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

export default CategoryCarousel;
