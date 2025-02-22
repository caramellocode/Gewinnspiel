import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SponsoringComponent16 = () => {
  return (
    <div className="dark:bg-mediumBlack">
      <section className="container mx-auto overflow-hidden px-5 py-[10px] md:py-0 md:pb-[10px] lg:py-[10px]">
        {/* facilities container */}
        <div className="">
          {/* facilities section -1 */}

          {/* facilities section - 2 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full md:ml-[60px] lg:ml-[10px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase">
              BILLARD – STEVE HEEB
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                <Link to="https://mezzcue.com/en/players_pool/europe/liechtenstein/steve_heeb">
                  {" "}
                  SPANNENDE ERFOLGE{" "}
                </Link>
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Wir sind stolz darauf, Steve Heeb zu unterstützen. Als
                talentierter Billardspieler bringt Steve außergewöhnliche
                Fähigkeiten und Leidenschaft für den Sport mit. Wir freuen uns
                darauf, seine Karriere im Billard zu fördern und gemeinsam mit
                ihm spannende Erfolge zu feiern. .{" "}
              </p>
              <Link to="https://mezzcue.com/en/players_pool/europe/liechtenstein/steve_heeb">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
              <img src="/images/inner/steeve-freisteller.png" alt="" />
            </div>

            <div className=" md:pl-[30px] relative mt-5 md:mt-0">
              <img src="/images/home-1/steeve.jpg" alt="" className="w-full " />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsoringComponent16;
