import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Countdown from "../../Pages/InnerPage/Gallery/Countdown";
import Countdown2 from "../../Pages/InnerPage/Gallery/Countdown2";

const Facilities = () => {
  return (
    <div className="dark:bg-mediumBlack ">
      <section className="container mx-auto overflow-hidden px-5 py-[30px] md:py-0 md:pb-[120px] lg:py-[20px]">
        {/* section title and button */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full"
            style={{ marginLeft: "-20px" }}
          >
            <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0 ">
              NEWS & Events
            </h4>

            <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px]  text-lightBlack dark:text-white">
              GRAND EMOTIONS
            </h1>
          </div>
          <div className="mt-5 md:mt-0">
            <Link to="/"></Link>
          </div>
        </div>
        {/* facilities container */}
        <div className="">
          {/* facilities section -1  
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
         

          {/* facilities section - 2 */}

          {/* facilities section - 3 */}

          {/* facilities section - 2 */}

          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full md:ml-[60px] lg:ml-[5px]">
              <h4 className="text-base text-khaki leading-[26px] pb-[6px] uppercase">
                NEWS & Events
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                TIME MYSTERY JACKPOT – Täglich
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
              Jeden Tag zwischen 11 – 18 Uhr fällt der Hit Jackpot.
              💸 Einsatz ab 5 Rappen! <br />
                
                Egal wann du spielst – der Time Mystery Jackpot fällt täglich in
                diesem Zeitfenster! Sei dabei und sichere dir deine Chance auf
                fette Gewinne zwischen min. CHF 200- CHF 1000! 🏆💰
                <br />
              </p>
             
            </div>

            <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
              <img src="/images/inner/revision1.jpg" alt="" className="w-full " />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
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
                NEWS & Events
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                Bounty Hunter Days im Grand Casino Liechtenstein!
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                19. – 23. Februar 2025 💰 Geschätzter Preispool: CHF 200'000!{" "}
                <br />
                Die Jagd beginnt! Sei dabei und sichere dir deinen Anteil an
                diesem unglaublichen Festival. Spannende Turniere, Adrenalin pur
                und große Gewinne erwarten dich!
                <br />
              </p>
              <Link to="/pokerroom">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
            </div>

            <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
              <img src="/images/home-1/bhd1.jpg" alt="" className="w-full " />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
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
                EUROPEAN CASINO AWARDS 2025
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] text-lightBlack dark:text-white">
                NOMINIERT: BEST OVERALL CASINO 2025
              </h1>
              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Wir freuen uns riesig, bekannt zu geben, dass das Grand Casino
                Liechtenstein für die European Casino Awards 2025in der
                Kategorie «Best Overall Casino» nominiert wurde! Am 20. Januar
                2025 treffen sich die besten Casinos Europas im Porta Fira
                Hotel, Barcelona, um diesen prestigeträchtigen Preis zu
                verleihen. Wir sind stolz, in einem Atemzug mit renommierten
                Casinos wie Monte-Carlo und Venedig genannt zu werden. Danke an
                unsere Gäste und unser unglaubliches Team – ohne euch wäre das
                nicht möglich gewesen!
                <br />
              </p>
              <Link to="/events">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
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
        </div>
      </section>
    </div>
  );
};

export default Facilities;
