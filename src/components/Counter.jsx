import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {incrementNumber, decrementNumber} from '../actions/ActionCounter';


import './styles/CounterStyle.css';
const Counter = () => {
    const myState= useSelector((state) =>state.changeNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className="mainContainer">
                
                <h2 className="counterName">Increment-Decrement Counter</h2>

                <div className="counterContainer">
                    <button className="decrement_num"
                    onClick={()=>dispatch(decrementNumber())} >DEC</button>
                    <input type="text" className="count_num" value={myState} />
                    <button className="increment_num" onClick={()=>dispatch(incrementNumber(3))} >INC</button>
                </div>
            </div>
        </>
    )
}

export default Counter;
