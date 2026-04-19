import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNotification } from './NotificationContext';

const ProductContext = createContext(null);
const API_BASE = 'https://dummyjson.com';

export function ProductProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { notify } = useNotification();

    async function fetchProducts() {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${API_BASE}/products?limit=8`);
            if (!response.ok) {
                throw new Error('Khong the tai danh sach san pham');
            }

            const result = await response.json();
            setData(result.products || []);
        } catch (err) {
            setError(err.message);
            notify(err.message, 'error');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = useMemo(
        () => ({ data, loading, error, fetchProducts }),
        [data, loading, error],
    );

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used inside ProductProvider');
    }

    return context;
}
