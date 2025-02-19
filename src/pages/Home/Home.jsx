import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const cx = classNames.bind(styles);

function Home() {
  return (
   <MainLayout>
      <div className={cx("home")}>
        
      </div>
   </MainLayout>
  );
}

export default Home;
