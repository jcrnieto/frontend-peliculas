import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getId } from '../actions';
import Models from './Models';

function Detail() {
  const dispatch = useDispatch();
  const movieId = useSelector( state => state.movie);
  //console.log('esto es movieId', movieId)
  const { id } = useParams();
  //console.log(id)
  
  
  useEffect(()=>{
    dispatch(getId(id))
  },[dispatch, id])

  return (
   <div>
     {/* <h1>{movieId?.[0].title}</h1> */}
      <Models
      title={movieId?.title}
       image={movieId?.image}
       type={movieId?.type}
       year={movieId?.year}
      />
   </div>
  )
}

export default Detail