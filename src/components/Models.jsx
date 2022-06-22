import React from 'react';
import { Link } from 'react-router-dom';
import './models.css';

function Models({title, year, image, type}) {
    console.log('estoy en models', title)
  return (
    <div className='container'>
      <div className='container-detail'>
         <h2>{title}</h2>
         <div className='container-img'>
         <img src={image} alt='pelicula'/>
         </div>
         <h3>{type}</h3>
         <h4>{year}</h4>
         <Link to='/'>
             <button className='button'>volver</button>
         </Link>
      </div>
     
        
      
    </div>
  )
}

export default Models