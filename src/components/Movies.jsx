import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnlyMovies } from '../actions'
import Card from './Card'
import {Link} from 'react-router-dom'


function Movies() {
   const dispatch = useDispatch();
   const allMovies = useSelector((state)=> state.movies)
   const [click, setClick] = useState(false)

    function handleClick(e){
      e.preventDefault()
      setClick(true)
      dispatch(getOnlyMovies())
    }
   // console.log('esto es handleClick', handleClick)
  return (
    <div>
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
      {click ? (
        <div className="cards-item">
          {allMovies &&
            allMovies.map((el) => (
              <div key={el.id} className="card-item">
                <Link className="link-movie" to={`/home/${el.id}`}>
                  <Card
                    image={el.image}
                    title={el.title}
                    year={el.year}
                    type={el.type}
                    key={el.id}
                  />
                </Link>
              </div>
            ))}
        </div>
      ) : undefined}
    </div>
  );
}

export default Movies