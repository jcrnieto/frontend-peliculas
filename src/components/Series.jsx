import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { getOnlySeries } from '../actions';

function Series() {
    const dispatch = useDispatch();
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
       
    </div>
  )
}

export default Series