import React from 'react'
import {useDispatch} from 'react-redux'
import { decrement } from "../store/counterSlice";

const SubtractComponent = () => {
    const dispatch = useDispatch()
    const decrease = () => {
        dispatch(decrement())
    }
    return (<div>
        <button onClick={() => decrease()} style={{marginLeft: 10}}>
            -
        </button>
    </div>)
}

export default SubtractComponent