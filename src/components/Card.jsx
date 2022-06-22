import React from 'react'

function Card({image, title, type, year}) {
   // console.log(title)
  return (
    <div className='card-container'>
         <h2>{title}</h2>
         <div className='card-img'>
         <img src={image} className='img'/>
         </div>
         <h3>{type}</h3>
         <h4>{year}</h4>
    </div>
  )
}

export default Card