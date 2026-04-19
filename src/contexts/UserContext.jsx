import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNotification } from './NotificationContext';

const UserContext = createContext(null);
const API_BASE = 'https://dummyjson.com';

export function UserProvider({ children }) {
    const [usersState, setUsersState] = useState({
        data: [],
        loading: false,
        error: null,
    });
    const [query, setQuery] = useState('');
    const [searchState, setSearchState] = useState({
        data: [],
        loading: false,
        error: null,
    });
    const { notify } = useNotification();

    async function fetchUsers() {
        try {
            setUsersState({ data: [], loading: true, error: null });

            const response = await fetch(`${API_BASE}/users?limit=10`);
            if (!response.ok) {
                throw new Error('Khong the fetch danh sach users');
            }

            const result = await response.json();
            setUsersState({
                data: result.users || [],
                loading: false,
                error: null,
            });
        } catch (err) {
            setUsersState({ data: [], loading: false, error: err.message });
            notify(err.message, 'error');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const trimmed = query.trim();

        if (!trimmed) {
            setSearchState({ data: [], loading: false, error: null });
            return undefined;
        }

        const timerId = window.setTimeout(async () => {
            try {
                setSearchState((prev) => ({ ...prev, loading: true, error: null }));

                const response = await fetch(
                    `${API_BASE}/users/search?q=${encodeURIComponent(trimmed)}`,
                );
                if (!response.ok) {
                    throw new Error('Khong the tim kiem user');
                }

                const result = await response.json();
                setSearchState({
                    data: result.users || [],
                    loading: false,
                    error: null,
                });
            } catch (err) {
                setSearchState({ data: [], loading: false, error: err.message });
            }
        }, 500);

        return () => window.clearTimeout(timerId);
    }, [query]);

    const value = useMemo(
        () => ({ usersState, fetchUsers, query, setQuery, searchState }),
        [usersState, query, searchState],
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUsers() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUsers must be used inside UserProvider');
    }

    return context;
}
