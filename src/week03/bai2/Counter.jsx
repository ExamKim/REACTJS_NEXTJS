import { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    const increase = () => setCount(count + 1)

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => setCount(0)

    return (
        <div className="counter-card">
            <h2
                className={count > 10 ? 'danger' : ''}
            >
                Count: {count}
            </h2>

            <div className="buttons">
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
