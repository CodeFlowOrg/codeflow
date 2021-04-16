import React from 'react'
import '../styles/Card.css'
import { BsCalendar } from "react-icons/bs";

function Card({image,title,info,category,date,time,btn}) {
    return (
        <div className='cards'>
           <img src={image} alt="thumbnail" className='card__img' />
           <div className="card__info">
               <div className="card__infoTxt">
                   <h4>({title}) <span>{category}</span></h4>
                   <p>{info}</p>
               </div>
               <div className="card__infoTime">
               <BsCalendar className="card__infoTime-icon" />
                <div className="card__infoTime-time">
                  <p>Date: {date}</p>
                  <p>Time: {time}</p>
                </div>
               </div>
           </div>
           <button className='card__btn'>{btn}</button>
        </div>
    )
}

export default Card
