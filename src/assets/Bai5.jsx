import { useState, useEffect } from "react";

function Bai5() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
            const data = await res.json();
            setTodos(data);
        } catch {
            setError("Không thể tải dữ liệu");
        }
    };

    const addTodo = async (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        try {
            setLoading(true);

            const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    completed: false
                })
            });

            const data = await res.json();

            setTodos([data, ...todos]);
            setTitle("");
        } catch {
            setError("Không thể thêm todo");
        } finally {
            setLoading(false);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter((todo) => todo.id !== id));
        } catch {
            setError("Không thể xóa todo");
        }
    };

    return (
        <div>
            <h2>Todo List</h2>

            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Nhập todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button disabled={loading}>
                    {loading ? "Adding..." : "Add"}
                </button>
            </form>

            {error && <p>{error}</p>}

            {todos.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.title}</p>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Bai5;