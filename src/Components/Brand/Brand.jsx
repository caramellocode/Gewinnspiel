import React from 'react';

const Brand = () => {
  const imageStyle = {
    width: 'auto',
    marginRight: '5px',
    marginBottom: '50px',
    marginTop: '12px',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px' }}>
      <div style={containerStyle}>
        <img
          className="sm:h-[120px] h-[80px]"
          src="/images/home-1/poker11.jpg"
          alt="Marke 4"
          style={imageStyle}
        />
        <img
          className="sm:h-[120px] h-[80px]"
          src="/images/home-1/hotell22.jpg"
          alt="Marke 5"
          style={imageStyle}
        />
        <img
          className="sm:h-[120px] h-[80px]"
          src="/images/home-1/events22.jpg"
          alt="Marke"
          style={imageStyle}
        />
        <img
          className="sm:h-[120px] h-[80px]"
          src="/images/home-1/fooor22.jpg"
          alt="Marke 6"
          style={imageStyle}
        />
        <img
          className="sm:h-[120px] h-[70px]"
          src="/images/home-1/alpspitz33.jpg"
          alt="Marke 7"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default Brand;
