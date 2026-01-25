import './Alert.css'
import { useState } from 'react'
import React from 'react'

export default function Alert() {
    const [type, setType] = useState('');

    return (
        <div>
            <div className='btn-group'>
                <button className='btn-Success' onClick={() => setType('Success')}>Success</button>
                <button className='btn-Warning' onClick={() => setType('Warning')}>Warning</button>
                <button className='btn-Error' onClick={() => setType('Error')}>Error</button>
            </div>
            <div className={`alert ${type}`}>
                {type === 'Success' && 'Thành công!'}
                {type === 'Warning' && 'Cảnh báo!'}
                {type === 'Error' && 'Lỗi!'}
            </div>
        </div>
    )
}

