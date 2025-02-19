/* eslint-disable react/prop-types */
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}

export default MainLayout;
