// Components
import Header from '@components/Header/Header/Header';

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import './home.css'

// Translation module
import { useTranslation } from 'react-i18next';

import eduImage from "@assets/HomeAssests/edu.webp";

import Results from "@components/Results/Results"
import TopUni from "@components/Top/TopUni"
import About from "@components/About/About"
import Services from "@components/Services/Services"
import Partniors from "@components/Partniors/Partniors"

import StdResults from "@components/StdResults/StdResults"
import visa1 from "@assets/HomeAssests/visa1.jpg";
import visa2 from "@assets/HomeAssests/visa2.jpg";
import visa3 from "@assets/HomeAssests/visa3.jpg";
import visa4 from "@assets/HomeAssests/visa4.jpg";
import visa5 from "@assets/HomeAssests/visa5.jpg";
import visa6 from "@assets/HomeAssests/visa6.jpg";

import ContactSection from "@components/ContactSection/ContactSection"
import Footer from "@components/Footer/Footer"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    // Tranlations
    const { t, i18n } = useTranslation();

    // State to toggle Hello box
    const [showHello, setShowHello] = useState(false);

    useEffect(() => {
      AOS.init({
        duration: 800, // animatsiya davomiyligi (ms)
        once: true,    // faqat bir marta ishlasin scrollda
      });
    }, []);
    
    const cards = [visa1, visa2, visa3, visa4, visa5, visa6];

    return (
        <div className="home-container">
            <div className="homeIntroBox">
                <Header />

              <div className="hero-container" data-aos="fade-down">
                <div className="hero-text">
                  <h1>
                    DUNYONING ENG NUFUZLI <br />
                    UNSERSITETLARIDA <br />
                    TALABA BO’LING
                  </h1>
                  <div className="hero-buttons">
                    <button className="consult-btn" onClick={() => setShowHello(true)}>KONSULTATSIYA</button>
                    <p>
                      Ma’lumotlaringizni qoldiring va BEPUL <br />
                      konsultatsiyaga ega bo’ling
                    </p>
                  </div>
                </div>
                <div className="hero-image">
                  <img
                    src={ eduImage }
                    alt="Graduation Hat"
                  />
                </div>
              </div>

              {/* Hello popup box */}
              {showHello && (
                <div
                  className="hello-popup"
                  onClick={() => setShowHello(false)} // umumiy div bosilsa yopiladi
                >
                  <h1 onClick={(e) => e.stopPropagation()}>Hello</h1>
                  <button onClick={(e) => {
                    e.stopPropagation(); // button bosilganda ham event yuqoriga chiqmasin
                    setShowHello(false);
                  }}>Cancel</button>
                </div>
              )}

              <Results />
              <Services />
              <TopUni />
              <About />
              <Partniors />

                <div className="app-container">
                  <h1 className="title">2025-YIL BAHORGI SEMESTR NATIJALARI</h1>
                  <div className="card-grid">
                    {cards.map((visa, index) => (
                      <StdResults key={index} visa={visa} />
                    ))}
                  </div>
                </div>
              
              <ContactSection />
              <Footer />
            </div>
      </div>
    );
};
  
export default Home;