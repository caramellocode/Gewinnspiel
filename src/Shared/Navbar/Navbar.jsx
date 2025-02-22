import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const audioRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isSpieleDropdownOpen, setIsSpieleDropdownOpen] = useState(false);
  const [isHotelDropdownOpen, setIsHotelDropdownOpen] = useState(false);

  const [isAlpspitzDropdownOpen, setIsAlpspitzDropdownOpen] = useState(false);


  const scrollPosition = useScrollPosition();
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-lightBlack" : "lg:bg-transparent";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isEpmDropdownOpen, setIsEpmDropdownOpen] = useState(false);

  const handleClick = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClickForAnimated = () => {
    setAnimate(true);
    audioRef.current.play();
    setTimeout(() => {
      setAnimate(false);
      setShowPopup(true);
    }, 5000);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate("/wptprime");
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const locationPath = useLocation();

  const handleJackpotClick = () => {
    navigate("/wptprime");
  };

  const handleWptPrimeClick = () => {
    if (!isDropdownOpen) {
      navigate("/wptprime");
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSpieleClick = () => {
    setIsSpieleDropdownOpen(!isSpieleDropdownOpen);
  };

  const handleHotelClick = () => {
    setIsHotelDropdownOpen(!isHotelDropdownOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsSpieleDropdownOpen(false);
    setIsHotelDropdownOpen(false);
  };

  return (
    <nav
      className={`w-full lg:fixed font-Lora z-10 lg:px-5 lg:py-2 transition-all duration-300 ${navbarBgColor} ${
        /^\/mobile\//.test(locationPath.pathname)
          ? "hidden"
          : locationPath.pathname === "/mobile"
          ? "hidden"
          : "block"
      }`}
    >
      <div className="lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className="w-48 lg:w-52 lg:p-4">
            <Link to="/">
              <img
                src="/images/home-3/logo.png"
                className="hidden lg:block w-full"
                alt="website_logo"
              />
            </Link>
          </div>
          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between text-lightBlack lg:text-white dark:text-white bg-khaki h-[70px] items-center p-3">
            <div className="w-28">
              <Link to="/">
                <img
                  src="/images/home-1/brand-1.png"
                  className="block lg:hidden"
                  alt="Royella_website_logo"
                />
              </Link>
            </div>

            {/* toggle bar and dark and light mode. */}
            <div className="flex items-center">
              <span onClick={handleClick} className="mr-3 cursor-pointer">
                {isDarkMode ? (
                  <BiSun
                    className="text-white"
                    title="Apply Light Mode"
                    size={20}
                  />
                ) : (
                  <IoMoonSharp
                    size={20}
                    className="text-white"
                    title="Apply Dark Mode"
                  />
                )}
              </span>
              <button
                className="lg:hidden block focus:outline-none"
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
          {/* All navLink are here with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit ease-in-out lg:flex lg:flex-wrap lg:justify-center space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm text-lightBlack lg:text-white dark:text-white uppercase font-normal bg-white dark:bg-normalBlack lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0`}
          >
            <li className="w-full lg:w-auto">
              <NavLink
                to="/"
                className=" text-[20px] px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li
              className="w-full lg:w-auto group relative px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 cursor-pointer"
              onMouseEnter={() => setIsSpieleDropdownOpen(true)}
              onMouseLeave={() => setIsSpieleDropdownOpen(false)}
            >
              <span className=" text-[20px] flex items-center" onClick={handleSpieleClick}>
                Spiele
                <BiChevronDown className="ml-1" />
              </span>
              {isSpieleDropdownOpen && (
                <div className="   absolute bg-white dark:bg-black mt-2 rounded shadow-lg z-10">
                  <NavLink
                    className="  block px-4 py-2 text-lightBlack dark:text-white"
                    to="/spielerschutz"
                    onClick={handleNavLinkClick}
                  >
                    Spielerschutz
                  </NavLink>

                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/spiele"
                    onClick={handleNavLinkClick}
                  >
                    Alle Spiele
                  </NavLink>

                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/spielautomaten"
                    onClick={handleNavLinkClick}
                  >
                    Automaten
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/american-roulette"
                    onClick={handleNavLinkClick}
                  >
                    American Roulette
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/poker"
                    onClick={handleNavLinkClick}
                  >
                    Poker
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/blackjack"
                    onClick={handleNavLinkClick}
                  >
                    Blackjack
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/texas-holdem"
                    onClick={handleNavLinkClick}
                  >
                    Texas Holdem
                  </NavLink>
                </div>
              )}
            </li>
            <li className="w-full lg:w-auto">
              <NavLink
                className=" text-[20px] px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/pokerroom"
                onClick={handleNavLinkClick}
              >
                Pokerroom
              </NavLink>
            </li>
            

            <li className=" text-[20px] w-full lg:w-auto">
              <NavLink
                className="px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/events"
                onClick={handleNavLinkClick}
              >
                Events
              </NavLink>
            </li>
            <li
              className="w-full lg:w-auto group relative px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 cursor-pointer"
              onMouseEnter={() => setIsHotelDropdownOpen(true)}
              onMouseLeave={() => setIsHotelDropdownOpen(false)}
            >
              <span className=" text-[20px] flex items-center" onClick={handleHotelClick}>
                Hotel
                <BiChevronDown className="ml-1" />
              </span>
              {isHotelDropdownOpen && (
                <div className="absolute bg-white dark:bg-black mt-2 rounded shadow-lg z-10">
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://gchotel.li/info-preise/"
                    onClick={handleNavLinkClick}
                  >
                    Infos
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://gchotel.li/zimmer/"
                    onClick={handleNavLinkClick}
                  >
                    Zimmer
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://gchotel.li/info-preise/"
                    onClick={handleNavLinkClick}
                  >
                    Preise
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://gchotel.li/buchen/"
                    onClick={handleNavLinkClick}
                  >
                    Buchen
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://gchotel.li/kontakt/"
                    onClick={handleNavLinkClick}
                  >
                    Kontakt
                  </NavLink>
                </div>
              )}
            </li>
            <li className=" text-[20px] w-full lg:w-auto">
              <NavLink
                className="px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/floorfour"
                onClick={handleNavLinkClick}
              >
                Floor&nbsp;Four
              </NavLink>
            </li>
            <li
              className="w-full lg:w-auto group relative px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 cursor-pointer"
              onMouseEnter={() => setIsAlpspitzDropdownOpen(true)}
              onMouseLeave={() => setIsAlpspitzDropdownOpen(false)}
            >
              <span
                className=" text-[20px] flex items-center"
                onClick={() =>
                  setIsAlpspitzDropdownOpen(!isAlpspitzDropdownOpen)
                }
              >
                Alpspitz
                <BiChevronDown className="ml-1" />
              </span>
              {isAlpspitzDropdownOpen && (
                <div className="absolute bg-white dark:bg-black mt-2 rounded shadow-lg z-10">
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://www.restaurant-alpspitz.li"
                    onClick={handleNavLinkClick}
                  >
                    Alle Infos
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="/genuss-spiel"
                    onClick={handleNavLinkClick}
                  >
                    Genuss Spiel
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://www.restaurant-alpspitz.li/tisch-reservieren/"
                    onClick={handleNavLinkClick}
                  >
                    Reservation
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-lightBlack dark:text-white"
                    to="https://www.restaurant-alpspitz.li/kontakt/"
                    onClick={handleNavLinkClick}
                  >
                    Kontakt
                  </NavLink>
                </div>
              )}
            </li>
            <li className=" text-[20px] w-full lg:w-auto">
              <NavLink
                className="px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/impressionen"
                onClick={handleNavLinkClick}
              >
                Impressionen
              </NavLink>
            </li>
            <li className=" text-[20px] w-full lg:w-auto">
              <NavLink
                className="px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/jobs"
                onClick={handleNavLinkClick}
              >
                Jobs
              </NavLink>
            </li>
            <li className="w-full lg:w-auto">
              <NavLink
                className=" text-[20px] px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/grand-sponsoring"
                onClick={handleNavLinkClick}
              >
                Sponsoring
              </NavLink>
            </li>
            <li className="w-full lg:w-auto">
              <NavLink
                className=" text-[20px] px-3 py-2 transition-all duration-300 text-lightBlack lg:text-white dark:text-white lg:border-b-0 group relative flex items-center cursor-pointer"
                to="/kontakt"
                onClick={handleNavLinkClick}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
          {/* large device visible button and search icon */}
          <div className="hidden lg:flex items-center">
            <span onClick={handleClick} className="mr-3 cursor-pointer group">
              {isDarkMode ? (
                <BiSun
                  className="text-white group-hover:rotate-90 rotate transition-all duration-300"
                  title="Apply Light Mode"
                  size={35}
                />
              ) : (
                <IoMoonSharp
                  className="text-white group-hover:rotate-[360deg] transition-all duration-300"
                  title="Apply Dark Mode"
                  size={35}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
