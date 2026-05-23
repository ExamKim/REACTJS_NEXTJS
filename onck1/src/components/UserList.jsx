import React, { useState } from 'react'
import { useEffect } from 'react';

export default function UserList() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setUser(data);
            });
    }, []);

    if (loading) return <p>Loading..</p>

    return (
        <div>
            {user.map(u => (
                <p key={u.id}>{u.name}</p>
            ))}
        </div>
    )
}
