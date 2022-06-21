import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../actions';



function LoadMovies() {
  const dispatch = useDispatch();
 // const allMovies = useSelector((state) => state.movies);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getMovies());
  }

  return (
    <div>
        <button className='button-home' onClick={(e) => { handleClick(e);}} >Home</button>
    </div>
  )
}

export default LoadMovies
