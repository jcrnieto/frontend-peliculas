import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getOnlySeries } from '../actions';
import Card from './Card'
import {Link} from 'react-router-dom'

function Series() {
    const dispatch = useDispatch();
    const allSeries = useSelector((state)=> state.movies);
    const [click, setClick] = useState(false);

    function handleClick(e){
        e.preventDefault();
        setClick(true);
        dispatch(getOnlySeries())
    }
    
  return (
    <div>
        <div>
            <button className='button-series' onClick={(e)=>{handleClick(e)}}>Series</button>
        </div>
        <div>
            {
              click?
              (
                <div className="cards-item">
                  {allSeries &&
                    allSeries.map((el) => (
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
    </div>
  )
}

export default Series