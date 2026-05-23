import React, { useState } from 'react'

export default function ProductItem({ product }) {

    const [show, setShow] = useState(true);
    // State dùng để làm gì?
    // State dùng để render lại các dữ liệu có thể thay đổi trong các component

    return (
        <div>
            <h3>{product.name}</h3>
            {show && <p>{product.price}</p>}
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}
