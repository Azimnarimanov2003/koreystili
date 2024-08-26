import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import wrapperlogo from '../../../../public/avatar.png';
import './Wrapper.css';

function Wrapper() {
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
    
    console.log("Ism:", name);
    console.log("Telefon raqam:", phone);
    closeModal(); 
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper-box" id="pastga_utish" >
          <h2 className="wrapper-name">
            O’quvchilarimizning natijalari TOPIK 6 gacha
          </h2>
          <Marquee direction='right'>
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
          </Marquee>
          <Marquee direction='left'>
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
            <img src={wrapperlogo} alt="img" className="wrapper-img" />
          </Marquee>
          <button className="header-btn" onClick={openModal}>Ariza qoldirish</button>
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

export default Wrapper;
