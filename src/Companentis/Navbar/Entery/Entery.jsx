import React from 'react'
import "./Entery.css"
export default function Entery() {
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
        Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.
        </p>
    </li>
    <li className="entry-item">
  <p><input type="text" className="entery-input" placeholder="Ismingiz" /></p>
  <p><input type="text" className="entery-input" placeholder="Telefin raqamingiz" /></p>
  <button className="entery-btn">
    Ariza qoldirish
  </button>
</li>
</ul>
</div>
</div>
      </div>
    </div>
  )
}
