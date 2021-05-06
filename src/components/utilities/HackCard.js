import React from 'react'
import '../styles/HackCard.css'
function HackCard({img, heading, para,category,cat,timing}) {
    return (
        <div className='hackCard'>
            <div className="hackCard__img">
                <img src={img} alt="thumbnail"/>
                <span>{timing}</span>
            </div>
            <div className="hackCard__content">
                <h2>{heading} <span>{category}</span></h2> 
                <p>{para}</p>
                <button>{cat ==='past'? 'Watch Now': 'Register'}</button>
            </div>
        </div>
    )
}

export default HackCard
