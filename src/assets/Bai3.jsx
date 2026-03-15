import { useState, useEffect } from "react";

function Bai3() {
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (userId === "") return;

        if (userId < 1 || userId > 10) {
            setError("User not found");
            setUser(null);
            return;
        }

        const fetchUser = async () => {
            try {
                setError("");

                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userId}`
                );

                if (!res.ok) {
                    throw new Error("User not found");
                }

                const data = await res.json();
                setUser(data);
            } catch {
                setError("User not found");
                setUser(null);
            }
        };

        fetchUser();
    }, [userId]); // fetch lại khi userId thay đổi

    return (
        <div>
            <h2>Tìm User theo ID</h2>

            <input
                type="number"
                placeholder="Nhập userId (1-10)"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />

            {error && <p>{error}</p>}

            {user && (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            )}
        </div>
    );
}

export default Bai3;