import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Offers = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width:1200px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
  });
  return (
    <section className="bg-[#f8f6f3] dark:bg-lightBlack">
      <div className="Container py-20 lg:py-[120px] ">
        <div
          className="flex items-center justify-between relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" md:w-[450px] lg:w-[450px] xl:w-[500px] font-Garamond" style={{ marginLeft: '-20px' }}>
            <h5 className="mb-3 text-base text-khaki leading-[26px] font-medium">
              PACKAGE
            </h5>
            <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white ">
            GRAND DEAL</h1>
          </div>
          <div className="flex items-center lg:space-x-5  space-x-3">
            
          </div>
        </div>

        <hr className="text-[#e8e8e8] dark:text-[#383838] my-[40px]" />
        {/* offers carusal */}
        <div className="relative">
          <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
            {/* slide - 1 */}
            <div className="keen-slider__slide number-slide1 ">
              {/* card one */}
              <div
                className="overflow-x-hidden group "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="relative">
                  <img
                    src="images/home-1/gallery-4.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-t-0 border-white dark:border-[#3f4040]">
                  

                  <div className="bg-white dark:bg-lightBlack">
                    <div className="py-[30px] text-center">
                      <Link to="/geschenk">
                        <h2
                          className="text-[24px] leading-[26px]  text-lightBlack dark:text-white hover:underline hover:text-khaki dark:hover:text-khaki transition-[0.4s] hover:underline-offset-2
                        "
                        >
                          Genussspiel 
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slide - 2 */}
         
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
