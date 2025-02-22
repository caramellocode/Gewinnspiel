import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import "keen-slider/keen-slider.min.css";
import './Jackpott.css'; // Importiere deine CSS-Datei

gsap.registerPlugin(ScrollTrigger);

const spanText = (text) => {
  const string = text.innerText;
  let spaned = "";
  for (let i = 0; i < string.length; i++) {
    if (string.substring(i, i + 1) === " ")
      spaned += string.substring(i, i + 1);
    else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
  }
  text.innerHTML = spaned;
};

const Jackpott = () => {
  const [jackpots, setJackpots] = useState([]);
  const [animatedJackpots, setAnimatedJackpots] = useState({});
  const [error, setError] = useState(null);
  const [activeStars, setActiveStars] = useState([]);

  useEffect(() => {
    const headline = document.querySelector("h1.jackpot-headline");
    if (headline) {
      spanText(headline);

      gsap.fromTo(
        headline.querySelectorAll("span"),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: headline,
            start: "top 80%", // Start, wenn 80% des Elements im Viewport sind
            toggleActions: "play none none none",
            onComplete: () => {
              startHoverAnimation(headline);
            },
          },
        }
      );
    }
  }, []);

  const startHoverAnimation = (element) => {
    gsap.to(element, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
    });
  };

  const jackpotImages = {
    "2101": "/images/home-1/Clover-Link-480x480.png",
    "6001": "/images/home-1/cloverlink.png",
    "BB01": "/images/home-1/bubble.png",
    "CCE2": "/images/home-1/cashconnectionpreview.png",
    "MJ01": "/images/home-1/mega.png",
    "MJ02": "/images/home-1/maxi.png",
    "MJ03": "/images/home-1/midi.png",
    "XTL1": "/images/home-1/xtension.png",
    "6101": "/images/home-1/cloverlink-VIP.png",
    "MJO4": "/images/home-1/cloverlink-VIP.png"



  };

  const fetchData = async () => {
    const url = "https://gcli.li/json/jackpot.json"; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Netzwerkantwort war nicht ok: ${response.statusText}`);
      }
      const data = await response.json();

      // Filter um die neue Jackpot-ID erweitern
      const filteredJackpots = data.result.filter(jackpot =>
        ["2101", "6001", "BB01", "CCE2", "MJ01", "MJ02", "MJ03", "XTL1", "6101", "MJ04"].includes(jackpot.id)
      );

      setJackpots(filteredJackpots);
      localStorage.setItem('jackpotData', JSON.stringify(filteredJackpots));

      filteredJackpots.forEach(jackpot => {
        startAnimation(jackpot.id, jackpot.value);
      });
    } catch (error) {
      setError(error.message);
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  };

  const startAnimation = (id, targetValue) => {
    const initialValue = targetValue * 0.95;
    const duration = 5 * 60 * 1000;
    const stepTime = 4000;

    let currentValue = initialValue;
    const increment = (targetValue - initialValue) / (duration / stepTime);

    const interval = setInterval(() => {
      currentValue += increment;
      setAnimatedJackpots(prevState => ({
        ...prevState,
        [id]: Math.max(prevState[id] || initialValue, currentValue)
      }));

      if (currentValue >= targetValue) {
        clearInterval(interval);
        setAnimatedJackpots(prevState => ({
          ...prevState,
          [id]: targetValue
        }));
      }
    }, stepTime);
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const maxStars = 4;

    const addStar = () => {
      if (activeStars.length < maxStars) {
        const newStar = {
          id: Date.now(),
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth,
        };

        setActiveStars((prevStars) => [...prevStars, newStar]);

        setTimeout(() => {
          removeStar(newStar.id);
        }, 3000);
      }
    };

    const removeStar = (id) => {
      setActiveStars((prevStars) => prevStars.filter(star => star.id !== id));
    };

    const starInterval = setInterval(() => {
      addStar();
    }, 1000);

    return () => clearInterval(starInterval);
  }, [activeStars]);

  const formatJackpotValue = (value, id) => {
    const numericValue = parseFloat(value);
    return (id === "6101" || id === "6001") ? (numericValue * 3 / 100).toFixed(2) : (numericValue / 100).toFixed(2);
  };

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="jackpot-section py-5" style={{ padding: '15px 15px 250px 15px' }}>
      <h1 className="jackpot-headline text-center text-gold">AKTUELLE JACKPOTS</h1>
      <div id="star-container" className="relative">
        <div className="Container py-10" style={{ padding: '15px' }}>
          {error && <p className="text-red-500">Fehler: {error}</p>}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" data-aos="zoom-in-up" data-aos-duration="1000">
            {jackpots.map((jackpot) => (
              <div key={jackpot.id} className="jackpot-bg p-2 rounded-md flex items-center border-2 justify-between border-[#f8ea77]" style={{ marginBottom: '15px' }}>
                <div className="sm:w-[250px] w-[150px] flex gap-3 items-center">
                  <img className="sm:w-[120px] w-[70px] h-[20px] sm:h-[50px]" src={jackpotImages[jackpot.id]} alt="casino" />
                  <p className="text-[#c4b128] text-xs sm:text-md lg:text-lg xl:text-xl uppercase tracking-widest">{jackpot.name}</p>
                </div>
                <p className="jackpot-value flex items-center gap-1 text-[#cebb2c] text-sm sm:text-xl tracking-wider sm:pe-2">
                  CHF: <span className="text-lg"><AnimatedNumber size={screenSize > 600 ? 25 : 20} duration={1500} hasComma={true} value={formatJackpotValue(animatedJackpots[jackpot.id] || jackpot.value, jackpot.id)} /></span>
                </p>
              </div>
            ))}
          </div>
          {activeStars.map(star => (
            <div key={star.id} className="star-icon" style={{ position: 'absolute', top: star.top, left: star.left, animation: 'fade-in-out 3s' }}>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jackpott;
