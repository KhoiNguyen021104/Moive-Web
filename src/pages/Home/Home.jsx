import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import CenterLayout from "../../layouts/CenterLayout/CenterLayout";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel/CategoryCarousel";

const cx = classNames.bind(styles);

function Home() {
  return (
    <CenterLayout>
      <div className={cx("home")}>
        <div className={cx("carousel")}>
          <CategoryCarousel size='small'/>
          <CategoryCarousel size='medium'/>
          <CategoryCarousel size='large'/>
        </div>
      </div>
    </CenterLayout>
  );
}

export default Home;
