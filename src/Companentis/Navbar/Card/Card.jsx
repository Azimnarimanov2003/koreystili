import React from 'react'
import './Card.css'
import cardImg from '../../../../public/cardImg.png'
import cardImg1 from '../../../../public/cardImg2.png'
import cardImg2 from '../../../../public/cardImg3.png'
export default function Card() {
  return (
    <div>
      <div className="card">
        <div className="container">
          
        <h1 className="card-name"  >
        O’zingizga mos kursga ro’yxatdan o’ting
              </h1>
          <div className="card-bigbox"  id='kurslar'>

            <div className="card-box">
                <img src={cardImg} alt="tom" className="card-img" />
                <ul className="card-list">

                    <li className="card-item">
                        <h5 className="card-title">
                        Intiensive
                        </h5>
                        <p className="card-text">
                        <span className='sariq'> Koreys tilini    </span>chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.
                        </p>
                        <button className="card-button">
                          <p className="btn-subtext"> Ro'yxatdan o'tish</p> 
                        </button>
                    </li>

                    <li className="card-subitem">
                      <p className="card-subtext">
                      Davomiyligi: 5 oy
                      </p>

                      <h5 className="card-money">
                      970.000 so’m /oy
                      </h5>
                    </li>
                </ul>
            </div>
            <div className="card-box">
                <img src={cardImg1} alt="tom" className="card-img" />
                <ul className="card-list">

                    <li className="card-item">
                        <h5 className="card-title">
                        Odatiy
                        </h5>
                        <p className="card-text">
                        <span className='sariq'> Haftada 3 kun 1.5 soatdan  </span> iborat odatiy Koreys tili darslari.
                        </p>
                        <button className="card-button">
                          <p className="btn-subtext"> Ro'yxatdan o'tish</p> 
                        </button>
                    </li>

                    <li className="card-subitem">
                      <p className="card-subtext">
                      Davomiyligi: 5 oy
                      </p>

                      <h5 className="card-money">
                      560.000 so’m /oy
                      </h5>
                    </li>
                </ul>
            </div>
            <div className="card-box">
                <img src={cardImg2} alt="tom" className="card-img" />
                <ul className="card-list">

                    <li className="card-item">
                        <h5 className="card-title">
                        Individual
                        </h5>
                        <p className="card-text">
                        <span className='sariq'> O’qituvchidan individual dars    </span> olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.
                        </p>
                        <button className="card-button">
                          <p className="btn-subtext"> Ro'yxatdan o'tish</p> 
                        </button>
                    </li>

                    <li className="card-subitem">
                      <p className="card-subtext">
                      Davomiyligi: 5 oy
                      </p>

                      <h5 className="card-money">
                      1800000 so’m /oy
                      </h5>
                    </li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
