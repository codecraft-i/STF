import { useEffect, useRef } from "react";
import "./Partniors.css";

const partners = [
  {
    name: "University of South Wales",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/University_of_South_Wales_Logo.svg/1920px-University_of_South_Wales_Logo.svg.png"
  },
  {
    name: "APU",
    img: "https://www.apu.edu.my/sites/all/themes/apu/images/logo.png"
  },
  {
    name: "INTI",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/INTI_International_University_%26_Colleges_logo.svg/1200px-INTI_International_University_%26_Colleges_logo.svg.png"
  },
  {
    name: "UCSI University",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/UCSI_University_logo.svg/1200px-UCSI_University_logo.svg.png"
  },
  {
    name: "Edinburgh Napier University",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Edinburgh_Napier_University_logo.svg/2560px-Edinburgh_Napier_University_logo.svg.png"
  },
  {
    name: "Birmingham City University",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Birmingham_City_University_logo.svg/2560px-Birmingham_City_University_logo.svg.png"
  }
];

export default function Partniors() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
        if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
          // Boshlanishga qaytadi
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 200, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
}, []);

  return (
    <div className="hamkorlar-container">
      <h2 className="hamkorlar-title">HAMKORLARIMIZ</h2>
      <div className="carousel" ref={carouselRef}>
        {partners.map((partner, idx) => (
          <div key={idx} className="partner-box">
            <img src={partner.img} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
}