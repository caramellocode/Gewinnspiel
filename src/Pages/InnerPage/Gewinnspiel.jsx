import React, { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const Gewinnspiel = () => {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    geburtsdatum: "",
    heimTore: "",
    gastTore: "",
    isAdult: false,
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Ihr Tipp wurde erfolgreich abgesendet!");
  };

  return (
    <div
      className="shadow-lg rounded-lg p-4"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('/images/inner/soccer1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          padding: "5px",
          border: "5px solid white",
          borderRadius: "10px",
        }}
      >
        <Card
          style={{
            padding: "24px",
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "#008000",
            borderRadius: "8px",
            border: "2px solid white",
            boxShadow: "0 4px 8px rgba(239, 234, 234, 0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Gewinnspiel - Fussballtipp
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "17px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#ffffff", marginRight: "12px" }}>
                SCRA
              </span>
              <input
                type="number"
                name="heimTore"
                placeholder="Tore"
                value={formData.heimTore}
                onChange={handleChange}
                required
                style={{
                  width: "120px",
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px",
                  outline: "3px solid yellow",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#ffffff", marginRight: "12px" }}>
                TSV Hartberg
              </span>
              <input
                type="number"
                name="gastTore"
                placeholder="Tore"
                value={formData.gastTore}
                onChange={handleChange}
                required
                style={{
                  width: "120px",
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  // Ersetzt outline durch border + Gradient
                  border: "3px solid",
                  borderRadius: "4px", // Abgerundete Ecken
                  padding: "4px",
                  borderImage:
                    "linear-gradient(to right, white, blue, white) 1",
                  borderImageSlice: 1,
                  outline: "none", // Standard-Outline ausschalten
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <input
                type="text"
                name="vorname"
                placeholder="Vorname"
                value={formData.vorname}
                onChange={handleChange}
                required
                style={{
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px",
                  outline: "3px solid yellow",
                }}
              />
              <input
                type="text"
                name="nachname"
                placeholder="Nachname"
                value={formData.nachname}
                onChange={handleChange}
                required
                style={{
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px",
                  outline: "3px solid yellow",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px",
                  outline: "3px solid yellow",
                }}
              />
              <input
                type="date"
                name="geburtsdatum"
                placeholder="Geburtsdatum"
                value={formData.geburtsdatum}
                onChange={handleChange}
                required
                style={{
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px",
                  outline: "3px solid yellow",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <input
                type="checkbox"
                name="isAdult"
                checked={formData.isAdult}
                onChange={handleChange}
                style={{
                  marginRight: "8px",
                  outline: "3px solid yellow",
                }}
              />
              <label style={{ color: "#ffffff" }}>
                Ich bin schon 18 Jahre alt
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                style={{
                  marginRight: "8px",
                  outline: "3px solid yellow",
                }}
              />
              <label style={{ color: "#ffffff" }}>
                Ich bestätige den Newsletter
              </label>
            </div>
            <Button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "#ffffff",
                padding: "12px",
                borderRadius: "4px",
                textAlign: "center",
                cursor: "pointer",
                border: "3px solid white",
              }}
            >
              Jetzt Tipp absenden
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Gewinnspiel;
