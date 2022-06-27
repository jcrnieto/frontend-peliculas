import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getOrderDesc } from '../actions';
import './year.css'



function Year() {
const dispatch = useDispatch();
const [ click, setClick] = useState(false)



function handleClick(e){
  //console.log(e.target.value)
    e.preventDefault();
    
    if(e.target.value === 'DESC'){
      setClick(true)
      dispatch(getOrderDesc(e.target.value))
    } 
    //console.log(getOrderDesc)
    
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