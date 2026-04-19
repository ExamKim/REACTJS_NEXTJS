import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNotification } from './NotificationContext';

const AuthContext = createContext(null);
const TOKEN_KEY = 'miniapp_token';
const API_BASE = 'https://dummyjson.com';

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { notify } = useNotification();

    async function fetchMe(authToken) {
        const response = await fetch(`${API_BASE}/auth/me`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Khong the lay thong tin user');
        }

        return response.json();
    }

    async function login(username, password) {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    expiresInMins: 30,
                }),
            });

            if (!response.ok) {
                throw new Error('Sai username hoac password');
            }

            const data = await response.json();
            const nextToken = data.accessToken || data.token;

            if (!nextToken) {
                throw new Error('Khong nhan duoc token tu API');
            }

            const me = await fetchMe(nextToken);
            setToken(nextToken);
            setUser(me);
            localStorage.setItem(TOKEN_KEY, nextToken);
            notify('Dang nhap thanh cong', 'success');
        } catch (err) {
            setToken(null);
            setUser(null);
            localStorage.removeItem(TOKEN_KEY);
            setError(err.message);
            notify(err.message, 'error');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function fetchProtectedProfile() {
        if (!token) {
            const message = 'Ban chua dang nhap';
            setError(message);
            notify(message, 'error');
            return null;
        }

        try {
            setLoading(true);
            setError(null);
            const me = await fetchMe(token);
            setUser(me);
            notify('Goi API can auth thanh cong', 'success');
            return me;
        } catch (err) {
            setError(err.message);
            notify(err.message, 'error');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setToken(null);
        setUser(null);
        setError(null);
        localStorage.removeItem(TOKEN_KEY);
        notify('Da dang xuat', 'info');
    }

    useEffect(() => {
        let isMounted = true;

        async function hydrateUser() {
            if (!token) {
                return;
            }

            try {
                setLoading(true);
                setError(null);
                const me = await fetchMe(token);
                if (isMounted) {
                    setUser(me);
                }
            } catch (err) {
                if (isMounted) {
                    setToken(null);
                    setUser(null);
                    setError(err.message);
                    localStorage.removeItem(TOKEN_KEY);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        hydrateUser();

        return () => {
            isMounted = false;
        };
    }, [token]);

    const value = useMemo(
        () => ({
            token,
            user,
            loading,
            error,
            login,
            logout,
            fetchProtectedProfile,
        }),
        [token, user, loading, error],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }

    return context;
}
