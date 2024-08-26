import React from 'react';
import { useTranslation } from 'react-i18next'; // Import qilish
import headerImg from "../../../../public/headerimg.png";
import headerPic from "../../../../public/tom.png";
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-box">
            <ul className="header-list">
              <li className="header-item">
                <p className="header-text">{t("Header.hed")}</p>
              </li>
              <li className="header-item">
                <h3 className="header-title">{t("Header.hed1")}</h3>
              </li>
              <li className="header-item">
                <div className="header-box">
                  <img src={headerImg} alt="Korean language center" className="header-img" />
                  <p className="header-subtext">{t("Header.hed2")}</p>
                </div>
                <div className="header-box">
                  <img src={headerImg} alt="TOPIK preparation" className="header-img" />
                  <p className="header-subtext">{t("Header.hed3")}</p>
                </div>
              </li>
              <li className="header-subitem">
                <a className="header-link" href="#pastga_utish">
                  <button className="header-btn">{t("Header.hed4")}</button>
                </a>
                <p className="header-subtitle">{t("Header.hed5")}</p>
              </li>
            </ul>
            <img src={headerPic} alt="Header image" className="header-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
