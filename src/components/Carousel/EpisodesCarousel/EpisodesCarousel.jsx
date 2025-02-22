/* eslint-disable react/prop-types */
import { Carousel } from "antd";
import classNames from "classnames/bind";
import styles from "./EpisodesCarousel.module.scss";
import Poster from "../../Poster/Poster";
import CarouselTitle from "../CarouselTitle/CarouselTitle";
import CarouselArrowPrev from "../CarouselArrow/CarouselArrowPrev/CarouselArrowPrev";
import CarouselArrowNext from "../CarouselArrow/CarouselArrowNext/CarouselArrowNext";

const cx = classNames.bind(styles);

function EpisodesCarousel({ data }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5.2,
    slidesToScroll: 5,
    arrows: true,
    draggable: false,
    prevArrow: <CarouselArrowPrev slidesToShow={5.2} height={115} />,
    nextArrow: <CarouselArrowNext slidesToShow={5.2} height={115} />,
  };

  return (
    data?.episodes?.length > 0 && (
      <div className={cx("wrapper")}>
        <CarouselTitle title={data?.title} />
        <div className={cx("carousel-wrapper")}>
          <Carousel {...settings}>
            {data?.episodes.map((item) => (
              <div key={item} className={cx("slider-item")}>
                <Poster
                  poster={{
                    thumb_url: data?.image,
                    name: item?.name
                  }}
                  height={115}
                  typeImage='thumbnail'
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    )
  );
}

export default EpisodesCarousel;
