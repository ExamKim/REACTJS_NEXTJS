import { createContext, useContext, useMemo, useState } from 'react';

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    function notify(message, type = 'info') {
        const id = crypto.randomUUID();
        const nextToast = { id, message, type };

        setToasts((prev) => [...prev, nextToast]);

        window.setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }

    const value = useMemo(() => ({ notify, toasts }), [toasts]);

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used inside NotificationProvider');
    }

    return context;
}
