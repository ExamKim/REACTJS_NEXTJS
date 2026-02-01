import { useState } from 'react'
import './FormInfo.css'

function FormInfo() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className="form-card">
            <h2>Thông tin người dùng</h2>

            <input
                type="text"
                placeholder="Nhập tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="result">
                <p><strong>Tên:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    )
}

export default FormInfo
