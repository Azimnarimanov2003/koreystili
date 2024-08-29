import React, { useState } from 'react';
import axios from 'axios';
import './Card.css';
import cardImg from '../../../../public/cardImg.png';
import cardImg1 from '../../../../public/cardImg2.png';
import cardImg2 from '../../../../public/cardImg3.png';

export default function Card() {
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
      <div className="card">
        <div className="container">
          <h1 className="card-name">
            O’zingizga mos kursga ro’yxatdan o’ting
          </h1>
          <div className="card-bigbox" id='kurslar'>
            <div className="card-box">
              <img src={cardImg} alt="kurs1" className="card-img" />
              <ul className="card-list">
                <li className="card-item">
                  <h5 className="card-title">Intensive</h5>
                  <p className="card-text">
                    <span className='sariq'> Koreys tilini </span>chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.
                  </p>
                  <button className="card-button" onClick={openModal}>
                    <p className="btn-subtext"> Ro'yxatdan o'tish</p>
                  </button>
                </li>
                <li className="card-subitem">
                  <p className="card-subtext">Davomiyligi: 5 oy</p>
                  <h5 className="card-money">970.000 so’m /oy</h5>
                </li>
              </ul>
            </div>
            <div className="card-box">
              <img src={cardImg1} alt="kurs2" className="card-img" />
              <ul className="card-list">
                <li className="card-item">
                  <h5 className="card-title">Odatiy</h5>
                  <p className="card-text">
                    <span className='sariq'> Haftada 3 kun 1.5 soatdan </span> iborat odatiy Koreys tili darslari.
                  </p>
                  <button className="card-button" onClick={openModal}>
                    <p className="btn-subtext"> Ro'yxatdan o'tish</p>
                  </button>
                </li>
                <li className="card-subitem">
                  <p className="card-subtext">Davomiyligi: 5 oy</p>
                  <h5 className="card-money">560.000 so’m /oy</h5>
                </li>
              </ul>
            </div>
            <div className="card-box">
              <img src={cardImg2} alt="kurs3" className="card-img" />
              <ul className="card-list">
                <li className="card-item">
                  <h5 className="card-title">Individual</h5>
                  <p className="card-text">
                    <span className='sariq'> O’qituvchidan individual dars </span> olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.
                  </p>
                  <button className="card-button" onClick={openModal}>
                    <p className="btn-subtext"> Ro'yxatdan o'tish</p>
                  </button>
                </li>
                <li className="card-subitem">
                  <p className="card-subtext">Davomiyligi: 5 oy</p>
                  <h5 className="card-money">1.800.000 so’m /oy</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>O'z ma'lumotlaringizni qoldiring</h2>
            <p className="wrapper-subtext">
              Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi
            </p>
            <form onSubmit={handleFormSubmit}>
              <label className="modal-label">
                Ismingiz:
                <input
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
