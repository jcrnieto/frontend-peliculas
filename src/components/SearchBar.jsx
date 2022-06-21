import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getTitle } from '../actions/index.js';
import './SearchBar.css';


function SearchBar() {
  const dispatch = useDispatch();
  const [ title, setTitle] = useState('');

 function handleInput(e){
    e.preventDefault()
    setTitle(e.target.value)
    //console.log(e.target.value)
 }

function handleSubmit(e){
    e.preventDefault()
    dispatch(getTitle(title))
   //console.log(title)
 }
 


 return (
    <div>
        <input
        type='text'
        placeholder='Buscar...'
        className='input-busqueda'
        id='search'
        onChange={(e)=> handleInput(e)}
       />
        <button className='boton-busqueda' type='submit' onClick={(e)=> handleSubmit(e)}>Buscar</button>
    </div>
  )
}

export default SearchBar
