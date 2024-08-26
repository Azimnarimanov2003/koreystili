import React, { useState } from 'react';
import "./Hero.css";
import Marquee from "react-fast-marquee";
import herologo from "../../../../public/avatar.png";

export default function Hero() {
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

    console.log(`Ism: ${name}, Telefon raqam: ${phone}`);
    closeModal(); 
  };

  return (
    <div>
      <div className="hero">
        <div className="container">
          <h2 className="hero-name">
            Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz
          </h2>
          <div className="hero-box">
            <div className="hero-right">
              <ul className="hero-list">
                <li className="hero-item">
                  <p className="hero-text">
                    TOPIK academy consulting jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi
                  </p>
                </li>
                <li className="hero-item">
                  <p className="hero-text">
                    Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!
                  </p>
                </li>
                <li className="hero-item">
                  <button className="hero-button" onClick={openModal}>
                    <p className="btn-text">Ariza qoldirish</p>
                  </button>
                </li>
              </ul>
            </div>
            <div className="hero-left">
              <Marquee direction='right'>
                <img src={herologo} alt="img" className="hero-img" />
                <img src={herologo} alt="img" className="hero-img" />
                <img src={herologo} alt="img" className="hero-img" />
                <img src={herologo} alt="img" className="hero-img" />
                <img src={herologo} alt="img" className="hero-img" />
                <img src={herologo} alt="img" className="hero-img" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Ma'lumotlaringizni kiriting</h2>
            <form onSubmit={handleFormSubmit}>
              <label className="modal-label">
                Ism:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="modal-input"
                  placeholder="Ismingizni kiriting"
                />
              </label>
              <label className="modal-label">
                Telefon raqam:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="modal-input"
                  placeholder="Telefon raqamingizni kiriting"
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
