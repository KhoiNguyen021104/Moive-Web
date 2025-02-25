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
  console.log("🚀 ~ EpisodesCarousel ~ data:", data);
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: data?.episodes?.length < 6 ? data?.episodes?.length : 5.2,
    slidesToScroll: data?.episodes?.length < 6 ? 0 : 5.2,
    arrows: data?.episodes?.length > 6 ,
    draggable: false,
    prevArrow: <CarouselArrowPrev slidesToShow={5.2} height={150} />,
    nextArrow: <CarouselArrowNext slidesToShow={5.2} height={150} />,
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
                    name: item?.name,
                  }}
                  height={150}
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
