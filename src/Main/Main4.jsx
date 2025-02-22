import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";


const Main4 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <HelmetChanger title="Floor-Four" />
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

export default Main4;
