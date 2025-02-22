import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";

const Main3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <HelmetChanger title="Pokerroom" />
      <ScrollToTop />
      <GoToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main3;
