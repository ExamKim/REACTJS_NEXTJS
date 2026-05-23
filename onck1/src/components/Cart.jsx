import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            return existing
                ? prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...prev, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default function CartComponent() {
    const { cart, removeFromCart, totalPrice } = useCart()

    return (
        <div>
            <h2>Giỏ hàng của bạn</h2>
            {cart.length === 0 ? (
                <p>Giỏ hàng trống.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                            <span>
                                {item.name} - ${item.price} x {item.quantity}
                            </span>
                            <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                        </div>
                    ))}
                    <h3>Tổng tiền: ${totalPrice}</h3>
                </div>
            )}
        </div>
    )
}