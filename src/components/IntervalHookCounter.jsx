import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);
    const tick = () => {
        //setCount(count + 1);
        //if you don't want to put count in [count] then use like this
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []) //count to see the changes for count

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
