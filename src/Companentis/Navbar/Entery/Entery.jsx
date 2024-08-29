import React, { useState } from 'react';
import "./Entery.css";

export default function Entery() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Ism: ${name}\nTelefon raqam: ${phone}`);
    setName('');
    setPhone('');
  };

  return (
    <div>
      <div className="container">
        <div className="entery" id='savollar'>
          <div className="entery-box">
            <ul className="entery-list">
              <li className="entery-subitem">
                <h4 className="entery-title">
                  Savollaringiz qoldimi?
                </h4>
                <p className="entery-text">
                  Ma’lumotlaringizni qoldiring, siz bilan bog’lanib barcha savollaringizga javob beramiz.
                </p>
              </li>
              <li className="entry-item">
                <form onSubmit={handleFormSubmit}>
                  <p>
                    <input
                      type="text"
                      className="entery-input"
                      placeholder="Ismingiz"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      className="entery-input"
                      placeholder="Telefon raqamingiz"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </p>
                  <button type="submit" className="entery-btn">
                    Ariza qoldirish
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
