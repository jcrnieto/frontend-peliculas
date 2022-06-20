import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from '../actions';
import Card from './Card';
import SearchBar from './SearchBar';
import Movies from './Movies';
import Year from './Year';
import Series from './Series';
import LoadMovies from './LoadMovies';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  

  return (
    <div className="container-general">
      <div className="navbar">
           <h1>Películas y Series</h1>
              <ul className='menu'>
                <li className="nav-menu"><Movies /></li>
                <li className="nav-menu"><Series /></li>
                <li className="nav-menu"><LoadMovies/></li>
             </ul>
        <div className='subContainer'>
          <div className='ordenAño'>
            <Year />
          </div>
          <div className='SearchBar'>
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="cards">
        {allMovies &&
          allMovies.map((el) => (
            <div key={el.id} className="card-item">
              <Link className="link-movie" to={"/home/" + el.id}>
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
    </div>
  );
}

export default Home