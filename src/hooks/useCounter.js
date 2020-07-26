import {useEffect, useState} from 'react'

function useCounter( initialCount = 0, value = 1) {
    const [count, setCount] = useState(initialCount);

    const increament = () => {
        setCount(prevCount => prevCount + value)
    }

    const decreament = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(0)
    }

return [count, increament, decreament, reset]
}

export default useCounter
