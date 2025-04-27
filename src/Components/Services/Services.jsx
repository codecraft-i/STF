// src/components/InfoCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { useTranslation } from 'react-i18next';

const Services = () => {
  // Tranlations
  const { t, i18n } = useTranslation();
  
  const cards = [
    { title: t('bachelor_education_in_korea'), link: "/bachelor" },
    { title: t('master_education_in_korea'), link: "/master" },
    { title: t('language_courses'), link: "/languagecourse" },
    { title: t('professional_education'), link: "/vocationaleducation" },
  ];
  
  return (
    <>
      <div id="title-services" style={{ margin: "0 0 20px 0", color: "#eee" }}><h1>{t('our_services')}</h1></div>
      <div className="cards-container" data-aos="fade-down">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{card.title}</h2>
            <Link to={card.link} className="card-button">
              {t('more_information')}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;