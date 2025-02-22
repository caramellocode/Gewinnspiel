import { BsCheck2 } from "react-icons/bs";
import { useEffect, useState } from "react";

const ServiceDetails2 = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:gutscheine@gcli.li?subject=Bestellung&body=Ich%20möchte%20eine%20Bestellung%20aufgeben.';
  };

  const handleRouteClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=47.166,9.555'); // Koordinaten für Liechtenstein
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+4232227731';
  };

  return (
    <section className="">
      {/* Hier das Bild als Titelbild verwenden */}
      <img src="/images/home-1/geschenk1.jpg" alt="Titelbild" />

      {/* Service Details content */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container">
      <div className="pt-5 lg:pt-[35px]  pr-3">
            <p className="text-base font-Lora text-khaki">GRAND DEAL</p>
            <h2 className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white ">
            ENJOY GRAND mit dem Genussspiel für 2 Personen           </h2>
            <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
            Der Genussspiel-Gutschein ist das ideale Geschenk für jeden Anlass. Geniessen Sie einen kulinarischen Abend <br /> im Restaurant Alpspitz und anschliessend spannende Spiele im Casino.
            </p>
      </div>
          {/* image and Food list */}
          <div className="grid items-center grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
            <div
              className="col-span-6 md:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img src="/images/home-1/beschenkkk.webp" alt="" />
              <img  className="ciip" src="/images/home-1/chiip.png" alt="" />

            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-5 md:py-10 lg:px-6 lg:py-11 2xl:px-10 2xl:py-[50px]  grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white  mb-7">
                Genussspiel
                </h4>
                <div
                  className="grid items-center gap-[25px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 ">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Deal -
                      <span className="text-khaki"> CHF 65 pro Person</span>
                    </p>
                  </div>
                 
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                       {" "}
                      <span className="text-khaki">Apero </span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                       {" "}
                      <span className="text-khaki">Exklusives 3-Gang-Überraschungsmenü <br /> im Restaurant Alpspitz </span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                       {" "}
                      <span className="text-khaki">Begrüssungsjetons im Wert von 25 Franken </span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                       {" "}
                      <span className="text-khaki">Spielerklärung und Casinoführung <br /> (auf Wunsch und Anmeldung)</span>{" "}
                    </p>
                  </div>


                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Verfügbarkeit -{" "}
                      <span className="text-khaki"> Immer buchbar</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurants center */}
          <div className="pt-5 lg:pt-[35px]  pr-3">
            
           
            

            {/* Buttons */}

            {/* Restaurant Rules */}
            <div
              className="py-10 lg:py-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                         </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
            
              <img  className="ciip" src="/images/home-1/cubee.png" alt="" />
            <h1>Kontakt </h1>  
            <div className="flex space-x-4 mt-5">
              <button className="btn-primary1" onClick={handleEmailClick}>
               jetzt bestellen
              </button>
              <button className="btn-primary1" onClick={handleRouteClick}>
                Routenplaner
              </button>
              <button className="btn-primary1" onClick={handleCallClick}>
                Jetzt Anrufen
              </button>
            </div>
              </p>
            </div>
            {/* Dress Code Rules */}
            <div
              className="pb-10 lg:pb-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                <br /><br />
              </p>
              <div
              className="col-span-6 md:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              
              <img  className="img-zoom" src="/images/home-1/ccard.png" alt="" />

            </div>
            
            </div>
            {/* Dress Code Rules */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails2;
