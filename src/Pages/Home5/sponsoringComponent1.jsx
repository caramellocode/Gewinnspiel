import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SponsoringComponent1 = () => {
  return (
    <div className="dark:bg-mediumBlack">
      <section className="container mx-auto overflow-hidden px-5 py-[10px] md:py-0 md:pb-[10px] lg:py-[10px]">
        {/* facilities container */}
        <div className="">
          {/* facilities section -1 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[11px] h-full md:ml-[60px] lg:ml-[10px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                grand casino
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                SPONSORING NEWS
              </h1>
            </div>
          </div>

          {/* facilities section - 2 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full md:ml-[60px] lg:ml-[10px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase">
                SCR Altach Damen
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                <Link to="https://www.scra.at/news/detail/grand-casino-liechtenstein-neuer-hosensponsor-des-scr-altach"> AUF EIN SPANNENDES SPIEL </Link>
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Grand Casino Liechtenstein ist neuer Hosensponsor des SCR Altach.
                 Das
                Grand Casino ist mit seinem Logo ab sofort auf der
                Hosen-Rückseite der Frauen Bundesligamannschaft
                vertreten.
                <br />
              </p>
              <Link to="https://www.scra.at/news/detail/grand-casino-liechtenstein-neuer-hosensponsor-des-scr-altach">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
              <img src="/images/inner/puulins.png" alt="" />
            </div>

            <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
              <img
                src="/images/inner/csm_1-IMG_7862_aacfc8cc11.jpg"
                alt=""
                className="w-full "
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
            </div>
          </div>
          {/* facilities section - 3 */}
          {/* facilities section - 4 */}
        </div>
      </section>
    </div>
  );
};

export default SponsoringComponent1;
