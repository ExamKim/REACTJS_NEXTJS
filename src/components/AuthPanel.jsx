import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../atom/AuthAtom';

export default function AuthPanel() {
    const [user, setUser] = useRecoilState(userAtom);
    const [usernameInput, setUsernameInput] = useState('student_recoil');

    function handleLogin() {
        const cleanName = usernameInput.trim();
        if (!cleanName) return;
        setUser({ username: cleanName });
    }

    function handleLogout() {
        setUser(null);
    }

    return (
        <div className='auth-panel'>
            <input
                type='text'
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder='Nhap username'
            />

            {!user ? (
                <button onClick={handleLogin}>Login</button>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
}
