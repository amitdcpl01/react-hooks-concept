import React, { useState, useEffect } from 'react';

function HookCounterOne(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating the title')
        document.title = `you clicked ${count} times`
    }, [count]) //when count will change only the useEffect will be render
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}> click {count} times</button>
        </div>
    );
}

export default HookCounterOne;