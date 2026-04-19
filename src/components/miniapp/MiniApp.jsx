import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useNotification } from '../../contexts/NotificationContext';
import { useProducts } from '../../contexts/ProductContext';
import { useUsers } from '../../contexts/UserContext';
import ToastViewport from './ToastViewport';

function LoginPanel() {
    const { token, user, loading, error, login, logout, fetchProtectedProfile } = useAuth();
    const [username, setUsername] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');

    async function handleLogin(event) {
        event.preventDefault();
        await login(username, password);
    }

    async function handleFetchProfile() {
        await fetchProtectedProfile();
    }

    return (
        <section className='mini-block'>
            <h3>Bai 9: Auth + API + Token</h3>
            {!token ? (
                <form className='auth-form' onSubmit={handleLogin}>
                    <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder='Username'
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Password'
                    />
                    <button type='submit' disabled={loading}>
                        {loading ? 'Dang login...' : 'Login'}
                    </button>
                </form>
            ) : (
                <div className='row'>
                    <span className='pill'>Token da luu (localStorage)</span>
                    <button onClick={handleFetchProfile} disabled={loading}>
                        {loading ? 'Dang goi API...' : 'Goi API auth'}
                    </button>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
            {error && <p className='error-text'>{error}</p>}
            {user && <p className='muted'>Xin chao {user.firstName} {user.lastName}</p>}
        </section>
    );
}

function ProductList() {
    const { data, loading, error, fetchProducts } = useProducts();
    const { addToCart } = useCart();

    return (
        <section className='mini-block'>
            <h3>Bai 10: Product List + Global Loading/Error</h3>
            <button onClick={fetchProducts}>Reload Products</button>
            {loading && <p className='muted'>Dang tai san pham...</p>}
            {error && <p className='error-text'>{error}</p>}
            <div className='product-grid'>
                {data.map((product) => (
                    <article key={product.id} className='product-card'>
                        <p className='product-title'>{product.title}</p>
                        <p className='muted'>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Them vao gio</button>
                    </article>
                ))}
            </div>
        </section>
    );
}

function CartPanel() {
    const {
        items,
        totalItems,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    } = useCart();

    return (
        <section className='mini-block'>
            <h3>Bai 5: Cart (Business Logic)</h3>
            <p className='muted'>Tong so luong: {totalItems}</p>
            <p className='muted'>Tong tien: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart} disabled={items.length === 0}>
                Xoa gio hang
            </button>
            <ul className='todo-list'>
                {items.map((item) => (
                    <li key={item.id} className='todo-item'>
                        <span>
                            {item.title} (${item.price}) x {item.quantity}
                        </span>
                        <div className='row'>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
            {items.length === 0 && <p className='muted'>Gio hang trong.</p>}
        </section>
    );
}

function UsersFetchPanel() {
    const { usersState, fetchUsers } = useUsers();

    return (
        <section className='mini-block'>
            <h3>Bai 7: Fetch Users (Global Async)</h3>
            <button onClick={fetchUsers}>Fetch users</button>
            {usersState.loading && <p className='muted'>Loading spinner...</p>}
            {usersState.error && <p className='error-text'>{usersState.error}</p>}
            <ul className='simple-list'>
                {usersState.data.map((user) => (
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </section>
    );
}

function SearchUsersPanel() {
    const { query, setQuery, searchState } = useUsers();

    return (
        <section className='mini-block'>
            <h3>Bai 8: Search + Debounce + API</h3>
            <input
                type='text'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Nhap ten user de tim (debounce 500ms)'
            />
            {searchState.loading && <p className='muted'>Dang tim...</p>}
            {searchState.error && <p className='error-text'>{searchState.error}</p>}
            <ul className='simple-list'>
                {searchState.data.map((user) => (
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </section>
    );
}

function NotificationDemo() {
    const { notify } = useNotification();

    return (
        <section className='mini-block'>
            <h3>Bai 6: Notification System</h3>
            <div className='row'>
                <button onClick={() => notify('Thong bao tu component bat ky', 'info')}>
                    Show toast
                </button>
                <button onClick={() => notify('Tac vu thanh cong', 'success')}>
                    Success toast
                </button>
            </div>
            <p className='muted'>Toast tu dong an sau 3 giay.</p>
        </section>
    );
}

export default function MiniApp() {
    return (
        <div className='mini-app'>
            <ToastViewport />
            <CartPanel />
            <NotificationDemo />
            <UsersFetchPanel />
            <SearchUsersPanel />
            <LoginPanel />
            <ProductList />
        </div>
    );
}
