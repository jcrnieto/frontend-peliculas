import React from 'react';
import { Link } from 'react-router-dom';

function Models({title, year, image, type}) {
    console.log('estoy en models', title)
  return (
    <div>
      <div className='container-detail'>
         <h2>{title}</h2>
         <img src={image} alt='pelicula'/>
         <h3>{type}</h3>
         <h4>{year}</h4>
      </div>
      <div>
         <Link to='/'>
             <button>volver</button>
         </Link>
      </div>
    </div>
  )
}

export default Models