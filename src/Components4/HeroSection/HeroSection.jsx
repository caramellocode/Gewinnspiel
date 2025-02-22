import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const images = [
  '/images/home-1/rooftop1.png',
  '/images/home-1/rooftop2.png',
  '/images/home-1/rooftop3.jpg',
  '/images/home-1/rooftop4.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((nextImageIndex + 1) % images.length);
    }, 3000); // Bilder wechseln alle 3000ms (3 Sekunden)

    return () => clearInterval(intervalId); // Aufräumen des Intervals, wenn die Komponente demontiert wird
  }, [nextImageIndex]);

  return (
    
    <section
      className="relative bg-center bg-no-repeat bg-cover h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] grid items-center justify-center"
      data-aos="fade-down"
    >
      <div
        className="absolute w-full h-full transition-opacity duration-3000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover', // Stellt sicher, dass das Bild den Container vollständig bedeckt
          backgroundPosition: 'center', // Zentriert das Bild
          opacity: 1,
        }}
      />
      <div
        className="absolute w-full h-full transition-opacity duration-3000 ease-in-out"
        style={{
          backgroundImage: `url(${images[nextImageIndex]})`,
          backgroundSize: 'cover', // Stellt sicher, dass das Bild den Container vollständig bedeckt
          backgroundPosition: 'center', // Zentriert das Bild
          opacity: currentImageIndex === nextImageIndex ? 0 : 1,
        }}
      />
      <div className="text-center z-10">
        <p className="text-white text-sm sm:text-base leading-8 md:leading-10 font-normal font-Lora my-[6px] sm:py-2 md:py-0">
          Rundumaussicht
        </p>
        <div className="mb-6 md:mb-[30px]">
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl leading-10 font-semibold font-Garamond">
            Exklusives Sortiment
          </h1>
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond mt-1">
            Besondere Events
          </h1>
        </div>
        <Link to={""}>
          <button className="btn-secondary lg:h-[55px] before:top-[3.3rem] lg:before:top-[4rem]">
            Mehr Infos
          </button>
        </Link>
        
      </div>
    </section>
  );
};

export default HeroSection;




