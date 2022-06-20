// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getOrderDesc } from '../actions';
import Card from './Card';
import { Link } from 'react-router-dom';

import React from 'react'

function Year() {
const dispatch = useDispatch();
const orderMovies = useSelector((state)=> state.movies);


function handleClick(e){
    e.preventDefault();
    //console.log(e.target.value, 'componente año')
    //setClick(true);
    if(e.target.value === 'DESC') return dispatch(getOrderDesc(e.target.value))
    console.log(getOrderDesc)
    
}
   
  return (
    <div>  
    <div>
        <select onChange={(e)=>{handleClick(e)}}>
                <option value='ASC'>Año Ascendente</option>
                <option value='DESC'>Año Descendente</option>
        </select>
    </div>
     {/* {  
        <div className='cards-item'>
               {
                   orderMovies && orderMovies.map((el)=>(
                           <div key={el.id} className='card-item'>
                               <Link className='link-movie' to={`/home/${el.id}`}>
                             <Card
                             image={el.image}
                             title={el.title}
                             year={el.year}
                             type={el.type}
                             key={el.id}
                             />
                             </Link>
                           </div>
                       )
                   
                 )}
           </div> 
        }  */}

    </div>
  )
}

export default Year