import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import CenterLayout from "./layouts/CenterLayout/CenterLayout";
import Category from "./pages/Category/Category";

function App() {
  return (
    <div className='app'>
      <CenterLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/phim-bo' element={<Category />}></Route>
        </Routes>
      </CenterLayout>
    </div>
  );
}

export default App;
