import React from "react";
import "./About.css";
import profileImg from "@assets/Logo.png";

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="author-section" id="about">
      {/* Bezak shakllar */}
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>

      {/* Kontent */}
      <div className="author-container">
        <div className="author-image-wrapper">
          <img src={profileImg} alt="Prof. Sophia" className="author-image" />
        </div>
        <div className="author-text">
          <h5 className="author-subtitle">{t('stf_consulting_founder')}</h5>
          <h2 className="author-title">TOSHMAMATOV SARVARJON</h2>
          <p className="author-desc">
            {t('founder_intro')} <br /> <br />
            {t('advice_intro')} <br />
            {t('language_learning_tip')} <br />
            {t('culture_acceptance_tip')} <br />
            {t('discipline_tip')} <br /> <br />
            {t('final_message')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;