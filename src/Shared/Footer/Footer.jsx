import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Brand from "../../Components/Brand/Brand";
import { BiEnvelope, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaInstagram, FaFlickr } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Brand />
      <footer className="">
        {/* footer content */}
        <div className="bg-lightBlack">
          <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 2xl:grid-cols-12 gap-5 lg:gap-3 xl:gap-5 2xl:gap-[30px] pt-14 lg:pt-[100px]">
            {/* Footer Content one. */}
            <div
              className="lg:mt-[-130px] lg:col-span-3 2xl:col-span-4 bg-[#272727]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="py-6 md:py-7 lg:py-[50px] px-10 lg:px-5 xl:px-8 2xl:px-9">
                <img src="/images/home-1/brand-1.png" alt="Brand" />
                <div className="py-8 2xl:py-[50px]">
                  <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10">
                    KONTAKT
                  </h1>
                  <div className="space-y-4 pt-[30px] pb-2 2xl:pb-[30px]">
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] mt-2">
                      <IoIosCall
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4"
                        size={14}
                      />
                      +423 222 77 77
                    </p>
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <BiEnvelope
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4"
                        size={14}
                      />
                      grandcasino@gcli.li
                    </p>
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <IoLocationSharp
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4"
                        size={14}
                      />
                      Selemad 10 <br />
                      9487 Gamprin-Bendern
                    </p>
                  </div>
                </div>
                <div>
                  <ul className="flex space-x-3">
                    <li className="hover-animBg group transition-all duration-300 rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <a href="https://www.facebook.com/grandcasinoliechtenstein" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                      </a>
                    </li>
                    <li className="hover-animBg group transition-all duration-300 rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <a href="https://www.instagram.com/grandcasinoli/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                      </a>
                    </li>
                    <li className="hover-animBg group transition-all duration-300 rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <a href="https://www.linkedin.com/company/grand-casino-liechtenstein-bendern/" target="_blank" rel="noopener noreferrer">
                        <BiLogoLinkedin className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                      </a>
                    </li>
                    <li className="hover-animBg group transition-all duration-300 rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <a href="https://www.flickr.com/photos/gcli/albums" target="_blank" rel="noopener noreferrer">
                        <FaFlickr className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* footer content-2 */}
            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-2 ml-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase">
                IMPRESSUM
              </h1>
              <div className="pt-[30px] pb-0 lg:py-[30px]">
                <ul className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc">
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/datenschutz">Datenschutz</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/impressum">Hausordnung/AGB</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/Spielerschutz">Spielerschutz</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/Einlassbestimmungen">Einlassbestimmungen</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* footer content-3 */}
            <div
              className="pt-0 pb-8 lg:col-span-3 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase">
                GALERIE
              </h1>
              <div className="grid grid-cols-3 gap-2 mt-[45px] content-center">
                <div className="relative" style={{ paddingTop: "100%" }}>
                  <img
                    src="/images/home-1/gg1.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Galerie Bild 1"
                  />
                </div>
                <div className="relative" style={{ paddingTop: "100%" }}>
                  <img
                    src="/images/home-1/gg2.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Galerie Bild 2"
                  />
                </div>
                <div className="relative" style={{ paddingTop: "100%" }}>
                  <img
                    src="/images/home-1/gg3.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Galerie Bild 3"
                  />
                </div>
                <div className="relative" style={{ paddingTop: "100%" }}>
                  <img
                    src="/images/home-1/gg4.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Galerie Bild 4"
                  />
                </div>
                <div className="relative" style={{ paddingTop: "100%" }}>
                  <img
                    src="/images/home-1/gg7.JPG"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Galerie Bild 5"
                  />
                </div>
                <div className="relative" style={{ paddingTop: "100%" }}>
                  <img
                    src="/images/home-1/gg8.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Galerie Bild 6"
                  />
                </div>
              </div>
            </div>

            {/* footer content-4 */}
            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase">
                NEWSLETTER
              </h1>
              <div className="space-y-4 py-[30px]">
                <p className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]"></p>
                <form action="" className="space-y-4">
                  <input
                    type="email "
                    placeholder="DEINE E-MAIL"
                    className="placeholder:text-gray placeholder:font-klavika placeholder:font-normal placeholder:text-[15px] text-center h-[56px] w-full px-10 placeholder:leading-[26px] text-[15px] text-gray border-none outline-none focus:outline-none focus:border-khaki focus:ring-0"
                    required
                  />
                  <button className="btn-subscribe">Anmeldung</button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center py-5 2xl:py-7 bg-[#161616] text-sm md:text-base text-lightGray font-Lora font-normal">
            {` © ${new Date().getFullYear()} , Grand Casino Liechtenstein. All Rights Reserved.`}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
