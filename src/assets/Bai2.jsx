import React from 'react'
import { useState, useEffect } from "react";

function Bai2() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function fetchUsers() {
        try {
            setLoading(true);
            setError(false);
            var response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("API Error!");
            }
            var data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(true);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Danh sách Users</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error </p>}

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
export default Bai2;