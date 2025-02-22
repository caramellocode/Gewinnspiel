import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Events4 = () => {
  return (
    <div className="dark:bg-mediumBlack">
      <section className="container mx-auto overflow-hidden px-5 py-[10px] md:py-0 md:pb-[10px] lg:py-[10px]">
        {/* section title and button */}

        {/* facilities container */}
        <div className="">
          {/* facilities section -1  */}

          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="font-Garamond h-full mb-5">
              <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[5px] uppercase"></h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px]  text-lightBlack dark:text-white">
                <Link to=""> TRAUMHAFTE AUSSICHT </Link>
              </h1>
              
              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal  lg:mt-[5px] lg:mb-[40px]">
              <span style={{ height: '30px', width: '1px', display: 'inline-block', backgroundColor: '#ddd', verticalAlign: 'middle', marginRight: '10px' }}></span> <br />
                Die herrliche Rundumsicht von der Dachterrasse auf die Liechtensteiner und Schweizer Bergwelt ist unbezahlbar. In der wärmeren Jahreszeit laden die Loungemöbel auf der stilvoll bepflanzten Terrasse zum Geniessen und Verweilen ein.
                <br />
              </p>
             
            </div>

            <div className="w-full relative">
              <img
                src="/images/home-1/Aussicht_Panorama-FloorFour-1.jpg"
                alt=""
                className="w-full h-auto"
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond"></h1>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default Events4;

