import React, { useState } from 'react';
import axios from 'axios';
import sectionLogo from "../../../../public/rasm1.png";
import sectionLogo1 from "../../../../public/rasm2.png";
import sectionLogo2 from "../../../../public/rasm3.png";
import sectionLogo3 from "../../../../public/rasm4.png";
import sectionLogo4 from "../../../../public/rasm5.png";
import sectionLogo5 from "../../../../public/rasm6.png";
import './Section.css';
import { useTranslation } from 'react-i18next';

function Section() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { t } = useTranslation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = "7196997578:AAFgSoy6xNCV0sCfL0GJeO6u5o6RdE8mxds";
    const chat_id = "2029939556";

    const message = `Ism: ${name}\nTelefon raqam: ${phone}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chat_id,
        text: message
      });
      alert("Xabar muvaffaqiyatli yuborildi!");
      setName('');
      setPhone('');
      closeModal();
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="section-box">
            <h3 className="section-name">{t("section.text")}</h3>
            <ul className="section-list">
              <li className="section-item">
                <img src={sectionLogo} alt="logo" className="section-img" />
                <p className="section-text">{t("section.text1")}</p>
              </li>
              <li className="section-item">
                <img src={sectionLogo1} alt="logo" className="section-img" />
                <p className="section-text">{t("section.text2")}</p>
              </li>
              <li className="section-item">
                <img src={sectionLogo2} alt="logo" className="section-img" />
                <p className="section-text">{t("section.text3")}</p>
              </li>
              <li className="section-item">
                <img src={sectionLogo3} alt="logo" className="section-img" />
                <p className="section-text">{t("section.text4")}</p>
              </li>
              <li className="section-item">
                <img src={sectionLogo4} alt="logo" className="section-img" />
                <p className="section-text">{t("section.text5")}</p>
              </li>
              <li className="section-item">
                <img src={sectionLogo5} alt="logo" className="section-img" />
                <p className="section-text">{t("section.text6")}</p>
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
            <h6 className='modal-text'>O'z ma'lumotlaringizni qoldiring</h6>
            <h6 className="modal-subtext">
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
