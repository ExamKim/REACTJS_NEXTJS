import { createContext, useContext, useMemo, useState } from 'react';
import { useNotification } from './NotificationContext';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const { notify } = useNotification();

    function addToCart(product) {
        setItems((prev) => {
            const existed = prev.find((item) => item.id === product.id);
            if (existed) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }

            return [
                ...prev,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                },
            ];
        });

        notify(`Da them ${product.title} vao gio`, 'success');
    }

    function increaseQuantity(productId) {
        setItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
            ),
        );
    }

    function decreaseQuantity(productId) {
        setItems((prev) =>
            prev
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    }

    function clearCart() {
        setItems([]);
        notify('Da xoa toan bo gio hang', 'info');
    }

    const totalItems = useMemo(
        () => items.reduce((sum, item) => sum + item.quantity, 0),
        [items],
    );

    const totalPrice = useMemo(
        () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [items],
    );

    const value = useMemo(
        () => ({
            items,
            totalItems,
            totalPrice,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
        }),
        [items, totalItems, totalPrice],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used inside CartProvider');
    }

    return context;
}
