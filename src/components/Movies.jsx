import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOnlyMovies } from '../actions'


function Movies() {
   const dispatch = useDispatch();
   const [click, setClick] = useState(false)

    function handleClick(e){
      e.preventDefault()
      setClick(true)
      dispatch(getOnlyMovies())
    }
   // console.log('esto es handleClick', handleClick)
  return (
   
      <div>
        <button
          className="button-movies"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Películas
        </button>
      </div>
     
    
  );
}

export default Movies