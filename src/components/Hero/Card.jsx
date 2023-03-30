import React from 'react'
import './hero.css'
import card1 from '../../assets/img/card1.png'
import card2 from '../../assets/img/card2.png'
import card3 from '../../assets/img/card3.png'
import text from '../../assets/img/text.png'
import triangle from '../../assets/img/triangle.png'


const Card = () => {
  return (
    <div className="card flex">
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        <div className="cardCircle flex">
            <img src={text} alt="" />
            <img src={triangle} className="triangle"/>
        </div>
    </div> 
 )
}

export default Card