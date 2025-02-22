import { Link } from "react-router-dom";
import './ExtraService.css';

const handleEmailClick = () => {
  window.location.href =
    "mailto:info@floorfour.li?subject=Bestellung&body=Ich%20möchte%20eine%20Bestellung%20aufgeben.";
};

const handleRouteClick = () => {
  window.open("https://www.google.com/maps/search/?api=1&query=47.166,9.555"); // Koordinaten für Liechtenstein
};

const handleCallClick = () => {
  window.location.href = "tel:+423 222 77 37";
};

const ExtraService = () => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(100%)",
    transition: "filter 0.5s",
  };

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "450px",
  };

  const sectionStyle = {
    backgroundColor: "white",
    padding: "0",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const contentStyle = {
    margin: "0 auto",
    padding: "0 1rem",
    maxWidth: "1200px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  };

  const buttonStyle = {
    flex: "1 1 auto",
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        {/* section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p className="font-Lora text-[15px] leading-[26px] text-khaki font-medium uppercase ">
              EVENT BILDER GALLERIE
            </p>
            <h3
              style={{
                color: "#333",
                fontSize: "2rem",
                lineHeight: "2.25rem",
                fontFamily: "Garamond, serif",
                fontWeight: 100,
                textAlign: "left",
                margin: "0",
              }}
            >
              IMPRESSIONEN
            </h3>
          </div>
          <Link
            to={
              "https://www.flickr.com/photos/gcli/collections/72157722925452612/"
            }
          >
            <button className="btn-primary1">weitere Bilder</button>
          </Link>
        </div>
        {/* section content */}
        <div style={{ paddingTop: "2.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
            }}
          >
            <div
              style={containerStyle}
              className="image-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/GCLI_DSC02814_print.jpg"
                style={imageStyle}
                alt="ISG Golf-Trophy 2022"
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </div>
            <div
              style={containerStyle}
              className="image-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/_kpp6843.jpg"
                style={imageStyle}
                alt="Afterwork Party"
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </div>
            <div
              style={containerStyle}
              className="image-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/GCLI_DSC02874_print.jpg"
                style={imageStyle}
                alt="Bounty Hunters"
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </div>
            <div
              style={containerStyle}
              className="image-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-1/SartoPhotography_DSC08813_print.jpg"
                style={imageStyle}
                alt="Afterwork Party2"
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                color: "#333",
                fontSize: "2rem",
                lineHeight: "2.25rem",
                fontFamily: "Garamond, serif",
                fontWeight: 100,
                margin: "15px",
              }}
            >
              
            </h3>
            <div
              style={buttonContainerStyle}
              className="button-container-responsive"
            >
              <button className="btn-primary1 bg-khaki" onClick={handleEmailClick}>
                E-Mail
              </button>
              <button className="btn-primary1 bg-khaki" onClick={handleRouteClick}>
                Routenplaner
              </button>
              <button className="btn-primary1 bg-khaki" onClick={handleCallClick}>
                Jetzt Anrufen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraService;


