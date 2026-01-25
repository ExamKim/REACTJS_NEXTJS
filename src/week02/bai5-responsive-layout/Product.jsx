import './Product.css'

export default function Product() {
    const products = [
        { id: 1, name: 'Giày trắng', price: '199.000đ' },
        { id: 2, name: 'Giày đen', price: '249.000đ' },
        { id: 3, name: 'Giày thể thao', price: '299.000đ' },
        { id: 4, name: 'Giày da', price: '399.000đ' },
        { id: 5, name: 'Giày sneaker', price: '279.000đ' },
        { id: 6, name: 'Giày lười', price: '189.000đ' },
        { id: 7, name: 'Giày chạy bộ', price: '450.000đ' },
        { id: 8, name: 'Giày vải', price: '120.000đ' },
        { id: 9, name: 'Giày cao cổ', price: '550.000đ' },
    ]

    const handleAddToCart = (name) => {
        alert(`Đã thêm ${name} vào giỏ hàng!`)
    }

    return (
        <div className="product-container">
            <h2>Product List</h2>

            <div className="product-grid">
                {products.map(item => (
                    <div className="product-card" key={item.id}>
                        <img
                            src={`https://picsum.photos/300/250?random=${item.id}`}
                            alt={item.name}
                            className="product-img"
                        />

                        <div className="product-info">
                            <h3 className="product-name">{item.name}</h3>
                            <p className="product-price">{item.price}</p>
                            <button
                                className="add-btn"
                                onClick={() => handleAddToCart(item.name)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}