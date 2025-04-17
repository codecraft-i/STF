import { useEffect, useState } from "react";

// React Router Link
import { NavLink, useNavigate } from "react-router-dom";

import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";

import { useTranslation } from 'react-i18next';
import { countryTranslations } from "../../../translations/countryTranslations";


// Style files
import "./navbar.css";

// Logo
import Logo from '@assets/Logo.png'

const languages = [
  { code: "uz", label: "O‘zbek", flag: "https://flagcdn.com/w40/uz.png" },
  { code: "ru", label: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  // Language select
  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (e) => {
      // const selectedLang = e.target.value;
      // i18n.changeLanguage(selectedLang);
      i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/countries/")
      .then(response => setCountries(response.data))
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryClick = (countryName) => {
    navigate("/universities", { state: { selectedCountry: countryName } });
    setIsMenuOpen(false);
  };

    return (
        <>
        <header className="header">
        <div className="logo"><NavLink to="/"><img src={Logo} alt="Logo" /></NavLink></div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "NavbarActive" : ""}>{t('home')}</NavLink>
        <NavLink to="/">{t('about_us')}</NavLink>

        <div className="dropdown">
          <div className="dropdown-hover-area">
            <span className="dropdown-title">
              {t("edu_in_karelia")}
              <span className="arrow"><MdOutlineKeyboardArrowDown /></span>
            </span>
            <div className="dropdown-content">
              <NavLink to="/til-kursi">Til kursi</NavLink>
              <NavLink to="/kasbiy-talim">Kasbiy ta'lim</NavLink>
              <NavLink to="/bakalavr">Bakalavr</NavLink>
              <NavLink to="/magistratura">Magistratura</NavLink>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdown-hover-area">
            <span className="dropdown-title">
              <NavLink to="/universities" className={({ isActive }) => isActive ? "NavbarActive" : ""}>{t("universities")}</NavLink>
              <span className="arrow">▼</span>
            </span>
            <div className="dropdown-content">
              {countries.map(country => {
                const translatedName = countryTranslations[country.name]?.[i18n.language] || country.name;
                return (
                  <button
                    key={country.id}
                    onClick={() => handleCountryClick(country.name)}
                    className="country-button"
                  >
                    {translatedName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="custom-select-wrapper">
      <select
        className="custom-select"
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      <div className="select-flag">
        <img
          src={languages.find((l) => l.code === i18n.language)?.flag}
          alt="flag"
        />
      </div>
    </div>
      </nav>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
        <FiMenu />
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}><FiX /></button>

          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('home')}</NavLink>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('about_us')}</NavLink>
          
          <span className="dropdown-title">Koreyada ta'lim</span>
          <NavLink to="/til-kursi" onClick={() => setIsMenuOpen(false)}>Til kursi</NavLink>
          <NavLink to="/kasbiy-talim" onClick={() => setIsMenuOpen(false)}>Kasbiy ta'lim</NavLink>
          <NavLink to="/bakalavr" onClick={() => setIsMenuOpen(false)}>Bakalavr</NavLink>
          <NavLink to="/magistratura" onClick={() => setIsMenuOpen(false)}>Magistratura</NavLink>

          <span className="dropdown-title">{t("select_country")}</span>
          {countries.map(country => {
            const translatedName = countryTranslations[country.name]?.[i18n.language] || country.name;
            return (
              <button
                key={country.id}
                onClick={() => handleCountryClick(country.name)}
                className="country-button"
              >
                {translatedName}
              </button>
            );
          })}
        </div>
      )}
    </header>
        </>
    );
};
  
export default Navbar;