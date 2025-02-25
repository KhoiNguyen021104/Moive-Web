import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Category from "./pages/Category/Category";
import DescriptionMovie from "./pages/Movie/DescriptionMovie/DescriptionMovie";
import WatchMovie from "./pages/Movie/WatchMovie/WatchMovie";
import EmptyLayout from "./layouts/EmptyLayout/EmptyLayout";
import Genre from "./pages/Genre/Genre";
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

function App() {
  const isPlayVideo = useLocation().pathname?.includes("xem-phim");
  return (
    <div className='app'>
      {!isPlayVideo && (
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/phim-bo' element={<Category />}></Route>
            <Route path='/tv-shows' element={<Category />}></Route>
            <Route path='/phim-le' element={<Category />}></Route>
            <Route path='/anime' element={<Category />}></Route>
            <Route path='/the-loai' element={<Genre />}></Route>
            <Route path='/mo-ta-phim/:movie' element={<DescriptionMovie />} />
            <Route path='/tim-kiem' element={<SearchMovie />}></Route>
            <Route path='/dang-nhap' element={<Login />}></Route>
            <Route path='/dang-ky' element={<Register />}></Route>
          </Routes>
        </MainLayout>
      )}
      {isPlayVideo && (
        <EmptyLayout>
          <Routes>
            <Route path='/xem-phim/:movieSLug' element={<WatchMovie />} />
          </Routes>
        </EmptyLayout>
      )}
    </div>
  );
}

export default App;
