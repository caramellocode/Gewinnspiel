import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Countdown from "../../Pages/InnerPage/Gallery/Countdown";
import Countdown2 from "../../Pages/InnerPage/Gallery/Countdown2";

const Facilities = () => {
  return (
    <div className="dark:bg-mediumBlack">
      <section className="container mx-auto overflow-hidden px-5 py-[40px] md:py-0 md:pb-[10px] lg:py-[40px]">
        {/* facilities container */}
        <div className="">
          {/* facilities section -1 */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[10px] h-full md:ml-[60px] lg:ml-[5px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0"></h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                GRAND EVENTS
              </h1>
            </div>
          </div>

          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full md:ml-[60px] lg:ml-[5px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase">
                European Casino Awards 2025
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                <Link to="/adventskalender">
                  NOMINIERT: BEST OVERALL CASINO 2025{" "}
                </Link>
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Wir freuen uns riesig, bekannt zu geben, dass das Grand Casino
                Liechtenstein für die European Casino Awards 2025in der
                Kategorie «Best Overall Casino» nominiert wurde! <br /> Am 20.
                Januar 2025 treffen sich die besten Casinos Europas im Porta
                Fira Hotel, Barcelona, um diesen prestigeträchtigen Preis zu
                verleihen. Wir sind stolz, in einem Atemzug mit renommierten
                Casinos wie Monte-Carlo und Venedig genannt zu werden. <br /> Danke
                an unsere Gäste und unser unglaubliches Team – ohne euch wäre
                das nicht möglich gewesen! 
                <br />
              </p>
              
            </div>

            <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
              <img
                src="/images/home-1/nominiert.jpg"
                alt=""
                className="w-full "
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
            </div>
          </div>
          {/* facilities section - 2 *

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>

          {/* facilities section - 2 
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full md:ml-[60px] lg:ml-[5px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase">
                Halloween im Grand Casino Liechtenstein!
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                Halloween
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Donnerstag, 31. Oktober 2024 <br />
                Mach dich bereit für einen schaurig-schönen Abend voller
                Spannung und Nervenkitzel! 👻🕸️ 💀 Stündliche Verlosungen im
                Gesamtwert von CHF 5'000! 💰 Komm vorbei, nimm an den
                Verlosungen teil und lass dich von der gruseligen Atmosphäre
                verzaubern. Es gibt jede Menge zu gewinnen! <br />
                💰 Verlosungen: CHF 5'000 👻 Wirst du der/die Glückliche sein?{" "}
                <br />
                Komm vorbei und finde es heraus!
                <br /> <br />
                <div>
                  <Countdown />

                </div>
              </p>
            </div>

            <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
              <img
                src="/images/home-1/halloween.png"
                alt=""
                className="w-full "
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
            </div>
          </div>
          {/* facilities section - 2 */}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
