import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HelmetChanger from "../Shared/Helmet/Helmet";

const Main2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <HelmetChanger title="Casino" />
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

export default Main2;
