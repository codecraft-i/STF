// src/components/InfoCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const cards = [
  { title: "Koreyada Bakalavr ta'lim", link: "/bachelor" },
  { title: "Koreyada Magistratura ta'lim", link: "/master" },
  { title: "Til Kurslari", link: "/languagecourse" },
  { title: "Kasbit ta'lim", link: "/vocationaleducation" },
];

const Services = () => {
  return (
    <>
      <div id="title-services" style={{ margin: "0 0 20px 0", color: "#eee" }}><h1>Bizning hizmatlarimiz</h1></div>
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
    </>
  );
};

export default Services;