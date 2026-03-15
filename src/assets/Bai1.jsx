import React from 'react'
import { useState, useEffect } from "react";

function Bai1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Danh sách Users</h2>

            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
export default Bai1;