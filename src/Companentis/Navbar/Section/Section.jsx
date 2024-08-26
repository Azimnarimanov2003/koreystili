import React, { useState } from 'react';
import sectionLogo from "../../../../public/rasm1.png";
import sectionLogo1 from "../../../../public/rasm2.png";
import sectionLogo2 from "../../../../public/rasm3.png";
import sectionLogo3 from "../../../../public/rasm4.png";
import sectionLogo4 from "../../../../public/rasm5.png";
import sectionLogo5 from "../../../../public/rasm6.png";
import './Section.css';
import { useTranslation } from 'react-i18next'; // Import qilish

function Section() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log("Ism:", name, "Telefon raqam:", phone);
    closeModal(); 
  };
const {t , i18n} = useTranslation();

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="section-box">
        <h3 className="section-name">{t("section.text")}</h3>
            <ul className="section-list">
              <li className="section-item">
                <img src={sectionLogo} alt="logo" className="section-img" />
                <p className="section-text">
                {t("section.text1")}
                </p>
              </li>
              <li className="section-item">
                <img src={sectionLogo1} alt="logo" className="section-img" />
                <p className="section-text">
                {t("section.text2")}
                </p>
              </li>
              <li className="section-item">
                <img src={sectionLogo2} alt="logo" className="section-img" />
                <p className="section-text">
                {t("section.text3")}                </p>
              </li>
            </ul>
            <ul className="section-list">
              <li className="section-item">
                <img src={sectionLogo3} alt="logo" className="section-img" />
                <p className="section-text">
                {t("section.text4")}                </p>
              </li>
              <li className="section-item">
                <img src={sectionLogo4} alt="logo" className="section-img" />
                <p className="section-text">
                {t("section.text5")}                </p>
              </li>
              <li className="section-item">
                <img src={sectionLogo5} alt="logo" className="section-img" />
                <p className="section-text">
                {t("section.text6")}                </p>
              </li>
            </ul>
            <button className="section-button" onClick={openModal}>
              <p className="section-subtext">{t("section.text7")}</p>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>O'z ma'lumotlaringizni qoldiring</h2>
            <h6 className="section-subtitle">
            Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi
            </h6>
            <form onSubmit={handleFormSubmit}>
              <label className="modal-label">
                Ismingiz:
                <input
                placeholder='Ismingizni kiriting'
                  type="text"
                  value={name}  
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="modal-input"
                />
              </label>
              <label className="modal-label">
                Telefon raqamingiz:
                <input
                  type="tel"
                  placeholder='Telefon raqamingizni kiriting'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="modal-input"
                />
              </label>
              <button type="submit" className="modal-submit-btn">Yuborish</button>
              <button type="button" onClick={closeModal} className="modal-close-btn">Yopish</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;
