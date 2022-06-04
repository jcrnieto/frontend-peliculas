import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from '../actions';
import Card from './Card';
import SearchBar from './SearchBar';

function Home() {
    const dispatch = useDispatch();
    const allMovies = useSelector((state)=> state.movies)
    console.log('esto es useselector',allMovies)
    useEffect(()=>{
       dispatch(getMovies())
    },[])


  return (
    <div className='container-general'>
        <h1>Películas y Series</h1>
        <div className='container-nav'>
            <button>Home</button>
            <button>Películas</button>
            <button>Series</button>
            <select>
                <option>Año Ascendente</option>
                <option>Año Descendente</option>
            </select>
        <SearchBar/>
       </div>
       <div className='cards-item'>
           {
               allMovies && allMovies.map((el)=>(
                       <div className='card-item'>
                          <h2>{el.title}</h2>
                          <img src={el.image}/>
                          <h3>{el.type}</h3>
                          <h3>{el.year}</h3>
                       </div>
                   )
               
             )}
       </div>
    </div>
  )
}

export default Home