import React, { useState } from 'react';
import "./Hero.css";
import Marquee from "react-fast-marquee";
import herologo from "../../../../public/avatar.png";
import axios from 'axios'; // Axios import qilamiz

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
      alert("Xabar muvaffaqiyatli yuborildi!"); // Alert qo'shildi
      setName('');
      setPhone('');
      closeModal(); 
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    }
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
