import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./BreadCrumbJackpott.css"; // Importiere die CSS-Datei

const BreadCrumbJackpott = ({ title, home }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  useEffect(() => {
    // Optional: Weitere Logik hier
  }, [location]);

  return (
    <section className="breadcrumb-jackpott h-[550px] grid items-center justify-center">
      <div className="mt-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10 lg:leading-[60px] 2xl:leading-[70px] text-white font-semibold font-Garamond uppercase">
          {title}
        </h1>
        <div className="flex items-center justify-center">
          {/* Eventuell weitere Inhalte hier */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbJackpott;
