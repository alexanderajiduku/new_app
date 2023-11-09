import React, {useState} from "react"
import './Counter.css';


const Counter = () => {
    // useState function call with a array of a variable and a function
    const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <h1 className="counter">Start the count from: {count}</h1>
            <button className="counter-decrement" onClick={() => setCount(count - 1)}>-</button>
            <button className="counter-increment" onClick={() => setCount(count +  1)}>+</button>
        </div>
    )
}

export default Counter;