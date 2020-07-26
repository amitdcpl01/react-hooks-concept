import React, { useState, useEffect } from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwoNew() {

    // const [count, setCount] = useState(0);

    // const increament = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // const decreament = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    const [count, increament, decreament, reset] = useCounter(10, 5)

    return (
        <div>
            <div>Count = {count}</div>

            <button onClick={increament}> InCreament</button>
            <button onClick={decreament}> Decreament</button>
            <button onClick={reset}> Reset</button>
        </div>
    )
}

export default CounterTwoNew
