import { Link, useLocation } from "react-router-dom";

const contactbreadcrumb = ({ title, home }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  return (
    <section className="bg-[url('/images/home-1/Titelbild_Kontakt.jpg')] bg-no-repeat bg-cover h-[550px] bg-center grid items-center justify-center">
      <div className="mt-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10 lg:leading-[60px] 2xl:leading-[70px] text-white font-semibold font-Garamond uppercase">
          {title}
        </h1>
        <div className="flex items-center justify-center">
         
         
        </div>
      </div>
    </section>
  );
};

export default contactbreadcrumb;