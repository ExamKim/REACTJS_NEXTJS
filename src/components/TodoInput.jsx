import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../atom/ToDoAtom';

export default function TodoInput() {
    const [text, setText] = useState('');
    const setTodos = useSetRecoilState(todoState);

    function handleAddTodo() {
        const content = text.trim();
        if (!content) return;

        setTodos((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                text: content,
            },
        ]);
        setText('');
    }

    return (
        <div className='row'>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Nhap cong viec'
            />
            <button onClick={handleAddTodo}>Them</button>
        </div>
    );
}
