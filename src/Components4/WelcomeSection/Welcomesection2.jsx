import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const WelcomeSection2 = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container flex flex-col md:flex-row items-center">
        {/* WelcomeSection text */}
        <div className="font-Garamond mt-5 w-full lg:w-1/2">
          <h5 className="text-base text-khaki leading-[26px] font-medium">
          ALLES RUNDUM DIE ROOF TOP BAR

          </h5>
          <h1 className="text-[22px] sm:text-2xl md:text-[21px] xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
          EINZIGARTIGES AMBIENTE
          </h1>
          <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
          Der Innenbereich der Bar ist in dunklen Brauntönen gehalten. Die überdimensionale, hinterleuchtete Leinwand und das Interieur erinnern an ein Herrenzimmer im englischen Stil. 
          </p>{" "}

          <br />
          <h5 className="text-base text-khaki leading-[26px] font-medium">
            
          </h5>
          <h1 className="text-[22px] sm:text-2xl md:text-[21px] xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
            TRAUMHAFTE AUSSICHT
          </h1>
          <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
            Die herrliche Rundumsicht von der Dachterrasse auf die
            Liechtensteiner und Schweizer Bergwelt ist unbezahlbar. In der
            wärmeren Jahreszeit laden die Loungemöbel auf der stilvoll
            bepflanzten Terrasse zum Geniessen und Verweilen ein.
          </p>{" "}
          
          <br />
         
          
          <br />
        </div>
        
        {/* WelcomeSection img */}
        <div
          className="w-full md:w-1/2 px-[20px] lg:pl-[20px] 2xl:px-[50px] relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/images/home-1/WantAD_x_Grand-Casino-LS-105.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    
  );
};

export default WelcomeSection2;
