import React, { useCallback, useMemo, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const Tang = useCallback(() => {
        setCount(count => count + 1);
    }, []);
    const calculation = (num) => {
        return num * 2;
    };

    const doubleCount = useMemo(() => {
        return calculation(count);
    }, [count]);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={Tang}>Tăng</button>
            <h3>{doubleCount}</h3>

        </div>
    )
}
