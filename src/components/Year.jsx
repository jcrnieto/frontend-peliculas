// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getOrderDesc } from '../actions';
import './year.css'

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
     
    <div className='order-age'>
        <select onChange={(e)=>{handleClick(e)}}>
                <option value='ASC'>Año Ascendente</option>
                <option value='DESC'>Año Descendente</option>
        </select>
    </div>
    
    
  )
}

export default Year