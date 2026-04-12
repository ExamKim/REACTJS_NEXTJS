import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../atom/ToDoAtom';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const setTodos = useSetRecoilState(todoState);

    function handleDelete() {
        setTodos((prev) => prev.filter((item) => item.id !== todo.id));
    }

    function handleSave() {
        const cleanText = editText.trim();
        if (!cleanText) return;

        setTodos((prev) =>
            prev.map((item) =>
                item.id === todo.id ? { ...item, text: cleanText } : item
            )
        );
        setIsEditing(false);
    }

    return (
        <li className='todo-item'>
            {isEditing ? (
                <input
                    type='text'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span>{todo.text}</span>
            )}

            <div className='row'>
                {isEditing ? (
                    <button onClick={handleSave}>Luu</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Sua</button>
                )}
                <button onClick={handleDelete}>Xoa</button>
            </div>
        </li>
    );
}
