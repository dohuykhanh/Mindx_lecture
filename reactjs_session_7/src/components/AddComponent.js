import React from "react";
import {useDispatch} from 'react-redux'
import { increment, incrementByAmount } from "../store/counterSlice";

const AddComponent = () => {
  const dispatch  = useDispatch()  
  const increase = () => {
      console.log('click')
    dispatch(increment())
  }

  const increaseBy2 = () => {
      dispatch(incrementByAmount(2))
  }
  return (
    <div>
      <button onClick={() => increaseBy2()}>Increase by 2</button>  
      <button onClick={()=> increase()} style={{marginLeft: 10, marginRight: 10}}>+</button>
    </div>
  );
};

export default AddComponent;
