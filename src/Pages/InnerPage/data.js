// data.js
const daysData = Array.from({ length: 24 }, (_, i) => {
    const day = i + 1;
  
    // Spezielle Inhalte für card 2 und card 3
    if (day === 2) {
      return {
        day,
        title: "Dezember 2",
        content: "Heute gibt es ein Gratis Spiel im Casino.",
        imageUrl: "/images/home-1/1a.jpg", // Bild für card 2
        footerText: "Wir freuen uns auf euren Besuch",
        buttonText: "Jetzt reservieren",
        isEditing: false,
      };
    }
  
    if (day === 3) {
      return {
        day,
        title: "Dezember 3",
        content: "Heute gibt es ein Gratis Spiel im Casino.",
        imageUrl: "/images/home-1/10er.jpg", // Bild für card 3
        footerText: "Wir freuen uns auf euren Besuch",
        buttonText: "Jetzt reservieren",
        isEditing: false,
      };
    }
  
    // Standard-Inhalte für die restlichen Karten
    return {
      day,
      title: `Dezember ${day}`,
      content: `Inhalt für Nummer ${day}.`,
      imageUrl: `/images/day${day}.jpg`,
      footerText: "", // Standardmäßig leer
      buttonText: "", // Standardmäßig leer
      isEditing: false,
    };
  });
  
  export default daysData;
  
  