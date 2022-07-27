import React from 'react'
import { useSelector } from 'react-redux'

const NumberComponent = () => {
    const value = useSelector((state) => state.counter.value)
    return (<div>
        {value}
    </div>)
}

export default NumberComponent