import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { NotificationProvider } from './NotificationContext';
import { ProductProvider } from './ProductContext';
import { UserProvider } from './UserContext';

export default function AppProviders({ children }) {
    return (
        <NotificationProvider>
            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <UserProvider>{children}</UserProvider>
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>
        </NotificationProvider>
    );
}
