import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import CenterLayout from "./layouts/CenterLayout/CenterLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Category from "./pages/Category/Category";
import DescriptionMovie from "./pages/Movie/DescriptionMovie/DescriptionMovie";
import WatchMovie from "./pages/Movie/WatchMovie/WatchMovie";

function App() {
  return (
    <div className='app'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/phim-bo' element={<Category />}></Route>
          <Route path='/mo-ta-phim/:movie' element={<DescriptionMovie />} />
          <Route path='/xem-phim/:movieSLug' element={<WatchMovie />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
