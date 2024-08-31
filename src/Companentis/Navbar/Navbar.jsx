import React, { useState, useEffect } from 'react';
import logo from "../../../public/logo.png";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => { 
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initialize state based on current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-box">
          <div className="logo"><img src={logo} className="navbar-img" alt="Logo" /></div>
          <div className="navbar-subbox">
          <div className="navbar-link">
            <a href="#" className="navbar-sublink_a">{t("Navbar.nav")}</a>
            <a href="#nega_biz" className="navbar-sublink">{t("Navbar.nav1")}</a>
            <a href="#pastga_utish" className="navbar-sublink">{t("Navbar.nav2")}</a>
            <a href="#kurslar" className="navbar-sublink">{t("Navbar.nav3")}</a>
            <a href="#savollar" className="navbar-sublink">{t("Navbar.nav4")}</a>
            <select className="language-select" onChange={handleChange}>
            <option value="uz">O'zbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
          </div>
         
          
          </div>
        <div className="menu-btn">
        <button  onClick={() => setIsModalOpen(!isModalOpen)}>☰</button>
        </div>
        </div>

        {!isModalOpen && (
          <div className="modal" onClick={() => setIsModalOpen(true)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
              
              <a href="#nega_biz" className="navbar-sublink">{t("Navbar.nav1")}</a>
              <a href="#pastga_utish" className="navbar-sublink">{t("Navbar.nav2")}</a>
              <a href="#kurslar" className="navbar-sublink">{t("Navbar.nav3")}</a>
              <a href="#savollar" className="navbar-sublink">{t("Navbar.nav4")}</a>
              <select className="language-select" onChange={handleChange}>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
