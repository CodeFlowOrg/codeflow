import React from 'react'
import '../styles/TeamCard.css'

function TeamCard({image,name,position}) {
    return (
        <div className='teamCard'>
          <img src={image} alt="thumbnail"/>
          <h5>{name}</h5>
          <p>{position}</p>
        </div>
    )
}

export default TeamCard
