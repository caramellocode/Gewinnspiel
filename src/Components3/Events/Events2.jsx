import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Events2 = () => {
  return (
    <div className="dark:bg-mediumBlack">

      <section
        className="container mx-auto overflow-hidden px-5 py-20 md:py-0 md:pb-20 lg:py-20"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        {/* section title and button */}

        {/* facilities container */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-1 mt-10" />
        <div className="">
          {/* facilities section -1  */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full">
              <h4 className="text-base  text-khaki leading-[26px] pb-[6px] pt-[5px]  uppercase mt-2 md:mt-0">
                Angebot
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] pb-[5px]  text-lightBlack dark:text-white">
                ALLES RUND UM DIE ROOF TOP BAR
              </h1>
            </div>
          </div>
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />


          {/* facilities section - 2 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full">
              <h4 className="text-base  text-khaki leading-[26px] pb-[0px] uppercase"></h4>

              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px]  text-lightBlack dark:text-white">
                <Link to=""> EINZIGARTIGES AMBIENTE </Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-5 lg:mt-[20px] lg:mb-[20px] before:absolute before:h-[30px] ">
              <span style={{ height: '30px', width: '1px', display: 'inline-block', backgroundColor: '#ddd', verticalAlign: 'middle', marginRight: '10px', marginTop: '-15px' }}></span> <br />
                Der Innenbereich der Bar ist in dunklen Brauntönen gehalten. Die
                überdimensionale, hinterleuchtete Leinwand und das Interieur
                erinnern an ein Herrenzimmer im englischen Stil.
              </p>
            </div>

            <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
              <img
                src="/images/home-1/Ambiente.jpg"
                alt=""
                className="w-full h-full"
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  
                </h1>
              </div>
            </div>
          </div>
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-5 mt-10" />
        </div>
      </section>
    </div>
  );
};

export default Events2;

