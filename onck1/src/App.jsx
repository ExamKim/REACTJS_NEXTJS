import './App.css'
import ProductList from './components/ProductList'
import CartComponent, { CartProvider } from './components/Cart'
import { Link, Route, Routes } from 'react-router-dom'

function Home() {
  return <h1>Home</h1>
}

function App() {
  return (
    <CartProvider>
      <nav style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <Link to="/">Home</Link>
        <Link to="/products">ProductList</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
    </CartProvider>
  )
}

export default App
