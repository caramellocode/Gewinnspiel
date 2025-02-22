import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Events5 = () => {
  return (
    <div className="dark:bg-mediumBlack ">
      <section className="container mx-auto overflow-hidden px-5 py-[120px] md:py-0 md:pb-[120px] lg:py-[10px]">
        {/* section title and button */}

        {/* facilities container */}
        <div className="">
          {/* facilities section -1  */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-5" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full"></div>
          </div>

          {/* facilities section - 2 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
              <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase "></h4>

              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px]  text-lightBlack dark:text-white">
                <Link to=""> EXKLUSIVES SORTIMENT </Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Ein exklusives Sortiment nicht alltäglicher Whisky-, Gin-, Rum
                und Zigarrensorten lassen jedes «Geniesserherz» höher schlagen. <br />
                Ein Humidor gefüllt mit handgerollten Spezialitäten von hoher
                Qualität aus den besten Tabakanbaugebieten wird jeden
                Zigarrenliebhaber begeistern.  
                <br></br>
              </p>
            </div>

            <div className="w-full  md:pl-[30px] relative mt-5 md:mt-0">
              <img
                src="/images/home-1/Sortiment.jpg"
                alt=""
                className="w-full h-full"
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki  font-Garamond"></h1>
              </div>
            </div>
          </div>
          {/* facilities section - 3 */}

          {/* facilities section - 4 */}

          {/* facilities section - 4 */}
        </div>
      </section>
    </div>
  );
};

export default Events5;
