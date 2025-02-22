import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import BreadCrumb from "../../BreadCrumb/contactbreadcrumb";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <BreadCrumb title="Kontakt " />

      {/* Contact */}
      {/* Contact with Us */}
      <div className="2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                Wir sind gerne für Sie da
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white my-3 md:my-5">
                KONTAKT CASINO
              </h2>

              {/* call */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <a href="tel:+4232227777" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                    <IoIosCall
                      size={22}
                      className="text-khaki group-hover:text-whiteSmoke"
                    />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                      Telefon
                    </p>
                    <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium">
                      +423 222 77 77
                    </p>
                  </div>
                </a>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <a href="mailto:grandcasino@gcli.li" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                    <MdEmail
                      size={22}
                      className="text-khaki group-hover:text-whiteSmoke"
                    />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                      Mail
                    </p>
                    <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                      grandcasino@gcli.li
                    </p>
                  </div>
                </a>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Adresse
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    Selemad 10,
                    9487 Gamprin-Bendern <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5 flex justify-center items-center"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/eingang.jpg"
                alt="Kontakt Bild"
                className="w-full max-w-[300px] h-auto object-cover"
                style={{ aspectRatio: "1 / 1" }} // Stellt sicher, dass das Bild quadratisch bleibt
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt Pokerroom */}
      <div className="2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                Wir sind gerne für Sie da
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white  my-3 md:my-5">
                KONTAKT POKERROOM
              </h2>

              {/* call */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <a href="tel:+4232227768" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                    <IoIosCall
                      size={22}
                      className="text-khaki group-hover:text-whiteSmoke"
                    />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                      Telefon
                    </p>
                    <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium">
                      +423 222 77 68
                    </p>
                  </div>
                </a>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <a href="mailto:poker@gcli.li" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                    <MdEmail
                      size={22}
                      className="text-khaki group-hover:text-whiteSmoke"
                    />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                      Mail
                    </p>
                    <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                      poker@gcli.li
                    </p>
                  </div>
                </a>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Adresse
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    Selemad 10,
                    9487 Gamprin-Bendern <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5 flex justify-center items-center"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/PIKER.jpg"
                alt="Kontakt Bild"
                className="w-full max-w-[300px] h-auto object-cover"
                style={{ aspectRatio: "1 / 1" }} // Stellt sicher, dass das Bild quadratisch bleibt
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt Floor Four */}
      <div className="2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                Wir sind gerne für Sie da
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white  my-3 md:my-5">
                KONTAKT FLOOR FOUR
              </h2>

              {/* call */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <a href="tel:+4232227737" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                    <IoIosCall
                      size={22}
                      className="text-khaki group-hover:text-whiteSmoke"
                    />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                      Telefon
                    </p>
                    <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium">
                      +423 222 77 37
                    </p>
                  </div>
                </a>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <a href="mailto:info@floorfour.li" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                    <MdEmail
                      size={22}
                      className="text-khaki group-hover:text-whiteSmoke"
                    />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                      Mail
                    </p>
                    <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                      info@floorfour.li
                    </p>
                  </div>
                </a>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Adresse
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    Selemad 10,
                    9487 Gamprin-Bendern <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5 flex justify-center items-center"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/FFFFLOOR.jpg"
                alt="Kontakt Bild"
                className="w-full max-w-[300px] h-auto object-cover"
                style={{ aspectRatio: "1 / 1" }} // Stellt sicher, dass das Bild quadratisch bleibt
              />
            </div>
          </div>
        </div>
      </div>

      {/* BreadCrumb height adjustment for mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            .bg-cover {
              height: 350px;
            }
          }
        `}
      </style>

      {/* google map */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.581797403026!2d9.500023276748767!3d47.205197415609604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b31ece47339b5%3A0xcb421d08c4507b71!2sGrand%20Casino%20Liechtenstein!5e0!3m2!1sen!2sch!4v1715594520776!5m2!1sen!2sch"
          height={450}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
