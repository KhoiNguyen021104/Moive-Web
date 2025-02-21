import classNames from "classnames/bind";
import styles from "./EpisodesList.module.scss";
import Title from "../Title/Title";
import CategoryCarousel from "../../../../components/Carousel/CategoryCarousel/CategoryCarousel";

const cx = classNames.bind(styles);

function EpisodesList({ episodes }) {
  return (
    <div className={cx("episodes__wrapper")}>
      <div className={cx("title")}>
        <Title title='Danh sách' />
        <div className={cx("episodes__carousel")}>
          <CategoryCarousel data={{ 
            
           }}/>
        </div>
      </div>
    </div>
  );
}

export default EpisodesList;
