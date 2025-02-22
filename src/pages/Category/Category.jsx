import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel/CategoryCarousel";
import { useLocation } from "react-router";
import { generateCategories } from "./generateCategories";

const cx = classNames.bind(styles);

function Category() {
  const category = useLocation().pathname?.split("/")?.at(1);
  const categoryData = generateCategories(category);
  return (
    <div className={cx("category")}>
      <div className={cx("carousel")}>
        {categoryData?.map((item, index) => (
          <CategoryCarousel key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
