import { FaStar } from "react-icons/fa";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import "./styles.css";

const Testimonials = () => {
  // keen config code...


  const handleEmailClick = () => {
    window.location.href = 'mailto:grandcasino@gcli.li?subject=Bestellung&body=Ich%20möchte%20eine%20Bestellung%20aufgeben.';
  };

  const handleRouteClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=47.166,9.555'); // Koordinaten für Liechtenstein
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+4232227731';
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 40,
    },
    vertical: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="py-20 2xl:py-[120px] bg-whiteSmoke dark:bg-normalBlack relative">
      <div className="Container">
        {/* section heading */}
        <div
          className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[280px] 2xl:px-[350px] font-Garamond"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center  justify-center">
            
          
            <h5 className="px-5 text-base leading-[26px] lg:leading-[42px] text-gray dark:text-lightGray font-Garamond ">
              
            </h5>
            
            
          </div>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[46px] text-lightBlack dark:text-white mt-1 mb-[15px]  ">
            GRAND POKERFACE
          </h1>
          
        </div>

        {/* section testimonials content */}
        
      
      </div>
    </section>
  );
};

export default Testimonials;
