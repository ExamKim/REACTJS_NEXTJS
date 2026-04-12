import { useRecoilValue } from 'recoil';
import { todoState } from '../atom/ToDoAtom';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useRecoilValue(todoState);

    if (todos.length === 0) {
        return <p className='muted'>Chua co cong viec nao.</p>;
    }

    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
