import React from 'react';
import logo from "../../../public/logo.png";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation(); 

  const handleChange = (event) => { 
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <img src={logo} className="navbar-img" alt="Logo" />
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">{t("Navbar.nav")}</a>
            </li>
            <li className="navbar-subitem">
              <a href="#nega_biz" className="navbar-sublink">{t("Navbar.nav1")}</a>
              <a href="#pastga_utish" className="navbar-sublink">{t("Navbar.nav2")}</a>
              <a href="#kurslar" className="navbar-sublink">{t("Navbar.nav3")}</a>
              <a href="#savollar" className="navbar-sublink">{t("Navbar.nav4")}</a>
            </li>
            <li className="navbar-item">
              <select className="language-select" onChange={handleChange}>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">+998 (33) 306 0098 {t("Navbar.nav5")}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
