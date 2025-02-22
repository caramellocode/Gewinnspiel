import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";

const Rooms = () => {
  const [rooms, setRooms] = useState(false);

  return (
    <section className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-cols-custom gap-5 lg:gap-8 xl:gap-6 items-stretch"
          style={{ paddingTop: "36px" }}
        >
          {/* Container 1: Turnierplan */}
          <div
            className="p-[30px] bg-white dark:bg-normalBlack boxShadow transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-1/turnieree.jpg"
              className="object-cover w-full h-auto"
              alt=""
            />
            <div className="flex-grow pt-[10px] pb-[5px] font-Garamond">
            <h3 className="text-[15px] sm:text-2xl lg:text-[18px] xl:text-[27px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-1 hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
            <Link to="https://live.gcli.li">TURNIERPLAN</Link>
              </h3>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                Spannende Pokerrunden für Pokerprofis und solche, die es noch
                werden wollen, sind immer in unserem aktuellen Turnierplan zu
                finden.
              </p>
              

              <a
                href="https://live.gcli.li/wp-content/uploads/2025/01/Turnierplan_Februar_2025.pdf"
                download
                className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki"
              >
                <br /> TURNIERPLAN Februar
                <HiOutlineArrowNarrowRight className="ml-2" />
              </a>

              <a
                href="https://live.gcli.li/wp-content/uploads/2025/02/Maerz_FL-Turniere-03.pdf"
                download
                className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki"
              >
                <br /> TURNIERPLAN März
                <HiOutlineArrowNarrowRight className="ml-2" />
              </a>
             
            </div>
          </div>

          {/* Container 2: Upcoming Events */}
          <div
            className="p-[30px] bg-white dark:bg-normalBlack boxShadow transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-1/RAKE.jpg"
              className="object-cover w-full h-auto"
              alt=""
            />
            <div className="flex-grow pt-[10px] pb-[5px] font-Garamond">
              <h3 className="text-[15px] sm:text-2xl lg:text-[18px] xl:text-[27px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-1 hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                <Link to="">RAKE CAP</Link>
              </h3>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
               
                NEWS: Ab dem 06.01.2025 beträgt das Rake CAP unglaubliche CHF
                5,- und ist auf allen Limits gültig.
              </p>
            </div>
          </div>
          {/* Container 2: Upcoming Events */}
          <div
            className="p-[30px] bg-white dark:bg-normalBlack boxShadow transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-1/flori.jpg"
              className="object-cover w-full h-auto"
              alt=""
            />
            <div className="flex-grow pt-[10px] pb-[5px] font-Garamond">
            <h3 className="text-[15px] sm:text-2xl lg:text-[18px] xl:text-[27px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-1 hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
            <Link to="https://live.gcli.li/upcoming-events/">
                  UPCOMING EVENTS
                </Link>
              </h3>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                Nationale und internationale Pokerturniere erwarten dich! <br />
              </p>
              <Link
                to="https://live.gcli.li/upcoming-events/"
                className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki"
              >
                DETAILS
                <HiOutlineArrowNarrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Container 4: Euro Poker Million */}
          <div
            className="p-[30px] bg-white dark:bg-normalBlack boxShadow transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-1/bhd1.jpg"
              className="object-cover w-full h-auto"
              alt=""
            />
            <div className="flex-grow pt-[10px] pb-[5px] font-Garamond">
            <h3 className="text-[15px] sm:text-2xl lg:text-[18px] xl:text-[27px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-1 hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
            <Link to="">Bounty Hunter Days</Link>
              </h3>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
              19. – 23. Februar 2025 💰 Geschätzter Preispool: CHF 200'000!
Die Jagd beginnt! Sei dabei und sichere dir deinen Anteil an diesem unglaublichen Festival. Spannende Turniere, Adrenalin pur und große Gewinne erwarten dich!
              </p>
            </div>
            <Link
              to="https://live.gcli.li/wp-content/uploads/2024/12/Schedule-Flyer_A5.pdf"
              className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki"
            >
              Turnierplan herunterladen
              <HiOutlineArrowNarrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* See more button */}
        <div className="text-center mt-[48px]"></div>
      </div>
    </section>
  );
};

export default Rooms;
