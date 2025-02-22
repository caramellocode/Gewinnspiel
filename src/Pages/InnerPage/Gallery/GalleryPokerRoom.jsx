import React, { useEffect, lazy, Suspense } from 'react';
import './GalleryPokerRoom.css';
import gsap from 'gsap';

const FloatingButton = lazy(() => import('../FloatingButton'));

const spanText = (text) => {
  const string = text.innerText;
  let spaned = '';
  for (let i = 0; i < string.length; i++) {
    spaned += string[i] === ' ' ? string[i] : `<span>${string[i]}</span>`;
  }
  text.innerHTML = spaned;
};

const GalleryPokerRoom = () => {
  useEffect(() => {
    const headline = document.querySelector("h1");
    if (headline) {
      spanText(headline);

      gsap.fromTo(
        headline.querySelectorAll('span'),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        }
      );
    }
  }, []);

  const images = [
    "./images/home-1/CA_8T9A7623-Verbessert-RR.jpg",
    "./images/home-1/CA_8T9A7669-Verbessert-RR.jpg",
    "./images/inner/Casino.jpg",
    "./images/home-1/gg4.jpg",
    "./images/home-1/werwerv.jpg",
    "./images/home-1/CA_florin.schmid_pokerstarsFinale_125.jpg",
    "./images/home-1/pokerroom.jpg",
    "./images/home-1/pppeee.jpeg",
    "./images/home-1/FF_DSC00050.jpg",
    "./images/home-1/FF_Nikki-Bar-coctail.jpg",
    "./images/home-1/Floor Four.jpg",
    "./images/home-1/FF_8T9A7291-kl.jpg",
    "./images/home-1/FF_DSC00050.jpg",
    "./images/home-1/FF_Nikki-Bar-coctail.jpg",
    "./images/inner/Alpspitz.jpg",
    "./images/inner/AS_IMG_0001_5.jpg",
    "./images/home-1/restaurant93.jpg",
    "./images/home-1/gg1.jpg",
    "./images/inner/Hotel.jpg",
    "./images/inner/CA_2020-09-08-Imagefotos-GCLI-0125 Kopie.jpg",
    "./images/home-1/WantAD_x_Grand-Casino-LS-13.jpeg",
    "./images/home-1/WantAD_x_Grand-Casino-LS-09.jpeg",
  ];

  return (
    <div className='galery-container'>
      <Suspense fallback={<div>Loading Floating Button...</div>}>
        <FloatingButton />
      </Suspense>
      <header className="header">
        <div className="container">
          <h1>IMPRESSIONEN</h1>
        </div>
      </header>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="item" key={index} tabIndex={index + 1}>
            <div className="box">
              <img src={src} alt={`Bild ${index + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPokerRoom;
