import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Player = () => {
  const [toggler, setToggler] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:poker@gcli.li";
  };

  const handleRouteClick = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+423 222 77 68";
  };

  return (
    <>
      <section className="bg-[url('/images/home-1/eye.png')] py-20 md:py-40 2xl:py-[260px] bg-center bg-no-repeat bg-cover">
        <div
          className="grid items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="w-[100px] h-[100px] grid items-center justify-center rounded-full border border-whiteSmoke m-[15px] ">
            <p
              className="text-base leading-[38px] text-lightBlack font-Garamond font-medium bg-whiteSmoke w-[70px] h-[70px] rounded-full grid items-center justify-center cursor-pointer"
              onClick={() => setToggler(!toggler)}
            >
              PLAY
            </p>
          </span>
        </div>
        <FsLightbox
          toggler={toggler}
          sources={["https://www.youtube.com/watch?v=HWe7tf-yUAU"]}
        />
      </section>
      <div className="flex justify-center space-x-2 sm:space-x-4 mt-10">
        <button className="btn-primary1  bg-khaki" onClick={handleEmailClick}>
          E-Mail schreiben
        </button>
        <button className="btn-primary1  bg-khaki" onClick={handleRouteClick}>
          Routenplaner
        </button>
        <button className="btn-primary1 bg-khaki" onClick={handleCallClick}>
          Jetzt Anrufen
        </button>
      </div>
    </>
  );
};

export default Player;


