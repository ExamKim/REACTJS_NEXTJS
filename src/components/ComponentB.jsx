import React from 'react'
import { useRecoilState } from 'recoil'
import { countAtom } from '../atom/ComponentAtom'

export default function ComponentB() {
    const [value, setValue] = useRecoilState(countAtom);

    function handleDec() {
        setValue((prev) => prev - 1);
    }

    function handleInc() {
        setValue((prev) => prev + 1);
    }

    function handleRes() {
        setValue(0);
    }

    return (
        <div className='row'>
            <span className='pill'>Count: {value}</span>
            <button onClick={handleDec}>Giam</button>
            <button onClick={handleInc}>Tang</button>
            <button onClick={handleRes}>Reset</button>
        </div>
    )
}
