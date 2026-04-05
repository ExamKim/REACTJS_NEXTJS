import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <header className="header">
        <nav className="menu" aria-label="Main menu">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/about">About</Link>
          <span>|</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
