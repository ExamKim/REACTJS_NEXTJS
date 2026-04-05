import { Link } from 'react-router-dom'

const products = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Laptop' },
]

function Products() {
    return (
        <section className="page">
            <h1>Products</h1>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products
