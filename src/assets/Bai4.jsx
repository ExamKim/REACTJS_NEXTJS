import { useState, useEffect } from "react";

function Bai4() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
            setFilteredPosts(data);
        };

        fetchPosts();
    }, []);

    const handleSearch = (value) => {
        setSearch(value);

        const result = posts.filter((post) =>
            post.title.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredPosts(result);
    };

    return (
        <div>
            <h2>Danh sách Posts</h2>

            <input
                type="text"
                placeholder="Search title..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />

            {filteredPosts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Bai4;