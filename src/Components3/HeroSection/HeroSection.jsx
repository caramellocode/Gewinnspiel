import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="">
      {/* // banner section */}
      <section
        className="bg-[url('/images/home-1/blondie-2.jpg')] bg-no-repeat bg-center w-full bg-cover h-[500px] lg:h-[680px]  grid items-center justify-center bg-[rgba(30,30,30,0.4)] bg-opacity-30 relative"
        data-aos="fade-down"
      >
        <div
          className="px-5 font-Garamond text-center text-[#fefefe]"
          style={{ paddingTop: "185px" }}
        >
          <h5 className="text-sm sm:text-base lg:text-lg leading-[26px] md:leading-8 lg:leading-[36px] font-bold bg-khaki bg-opacity-40 inline-block text-center px-3 sm:px-6 uppercase  relative"></h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] font-bold leading-[28px] md:leading-9 2xl:leading-[100px] -mt-24 mb-5 md:mb-7">
            GRAND POKERFACE
          </h1>
          <Link>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                paddingBottom: "-22px",
              }}
            >
              <img
                className="poker-room-icon w-[400px]"
                src="/images/home-1/pokerroom-icon.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </section>
      {/* // banner bottom */}
      <div className="bg-whiteSmoke dark:bg-lightBlack">
        <div className="-mt-[120px] relative z-[1]">
          <section
            className="Container bg-lightBlack dark:bg-normalBlack "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
