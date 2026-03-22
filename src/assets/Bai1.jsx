import React, { useReducer, useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Học useReducer', completed: false },
  { id: 2, text: 'Làm bài tập React', completed: true },
  { id: 3, text: 'Ăn tối', completed: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function Bai1() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: inputValue });
    setInputValue('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Todo App – useReducer
      </h1>

      <div style={{ display: 'flex', marginBottom: '2rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập việc cần làm..."
          onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
          style={{
            flex: 1,
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '6px 0 0 6px',
            outline: 'none',
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '0 6px 6px 0',
            cursor: 'pointer',
          }}
        >
          Thêm
        </button>
      </div>

      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>
          Chưa có công việc nào...
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.9rem 1.2rem',
                marginBottom: '0.8rem',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                  style={{ width: '20px', height: '20px' }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#888' : '#333',
                    fontSize: '1.1rem',
                  }}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#e74c3c',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0 8px',
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}