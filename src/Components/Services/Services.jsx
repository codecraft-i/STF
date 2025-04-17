// src/components/InfoCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const cards = [
  { title: "Koreyada ta'lim", link: "/koreyada-talym" },
  { title: "Maktab o‘quvchilari uchun 2haftalik lager", link: "/lager" },
  { title: "Tourism", link: "/tourism" },
  { title: "Medical tourism", link: "/medical-tourism" },
];

const Services = () => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.title}</h2>
          <Link to={card.link} className="card-button">
            Batafsil ma'lumot
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;

// You can import and use <InfoCards /> in your App.jsx
// Make sure to wrap your App in <BrowserRouter> from 'react-router-dom'