import React from 'react'
import './Sidebar.css'
import img from "../../../../public/sidebarImg.png"
import logo from "../../../../public/sidebarLogo.png"
export default function Sidebar() {
  return (

    
    <div>
      <div className="sidebar">
        <div className="container">
        <h1 className="sidebar-name">
                Koreya Universitetlariga 100% gacha grant yutish imkoniyati
                </h1>
            <div className="sidebar-box">
               
                <div className="sidebar-right">
                   <img src={img} alt="" className="sidebar-img" />
                   <img src={logo} alt="" className="sidebar-pic" />
                </div>
                <div className="sidebar-left">
                 <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <h4 className="sidebar-title">
                        GKS (Global Korean Scholarship) $70.000 lik Grant
                        </h4>
                        <p className="sidebar-text">
                        Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan xorijiy talabalarning Koreyada bakalavr va magistratura bosqichida 100% gacha to’liq grant
                        va oylik stipendiya olish imkoniyatingiz bor
                        </p>
                    </li>
                    <li className="sidebar-item">
                        <h4 className="sidebar-title">
                        GKS granti sizga nima beradi
                        </h4>
        
                    </li>
                    <li className="sidebar-subitem">
                        <p className="sidebar-text">
                        Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.
                        </p>
                    </li>
                    <li className="sidebar-subitem">
                        <p className="sidebar-text">
                        Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).                        </p>
                    </li>
                    <li className="sidebar-subitem">
                        <p className="sidebar-text">
                        Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... ko’proq                        </p>
                    </li>
        
                    
                    
                 </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
