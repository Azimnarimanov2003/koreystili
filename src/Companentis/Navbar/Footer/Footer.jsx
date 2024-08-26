import React from 'react'
import "./Footer.css"
import footerImg from "../../../../public/footerImg.png"
import footerPic from "../../../../public/tel.png"
import footerPic1 from "../../../../public/teg.png"
import footerPic2 from "../../../../public/insta.png"
import footerPic3 from "../../../../public/youtube.png"
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
            <ul className="footer-list">
                <li className="footer-item">
                    <img src={footerImg} alt="" className="footer-logo" />
                </li>
                <li className="footer-item">
                    <p className="footer-text">
                    Nega biz
                    </p>
                    <p className="footer-text">
                    Natijalar                    </p>
                    <p className="footer-text">
                    Kurslar                    </p>
                    <p className="footer-text">
                    Ko’p beriladigan savollar                    </p>
                    
                </li>
                <li className="footer-item">
                 <a href="tel:+998339260003">  <img src={footerPic} alt="" className="footer-img" /></a> 
                 <a href="https://t.me/Azim0003" target="_blank" rel="noopener noreferrer">
  <img src={footerPic1} alt="" className="footer-img" />
</a>
<a href="mailto:narimonovazim@gmail.com">
    <img src={footerPic2} alt="" className="footer-img" />
</a>
<a href="mailto:narimonovazim@gmail.com">
    <img src={footerPic3} alt="" className="footer-img" />
</a>

                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
