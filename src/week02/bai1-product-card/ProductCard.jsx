import './ProductCard.css'

export default function ProductCard() {

    const handleAddToCart = () => {
        alert('Đã thêm sản phẩm vào giỏ hàng!')
    }


    return (
        <div className="product-card">
            <img
                src="https://res.cloudinary.com/dba2jwxfs/image/upload/v1769267107/cld-sample-5.jpg"
                alt="product"
                className="product-image"
            />

            <div>
                <h3 className="product-name">Giày trắng tinh tươm</h3>
                <p className="product-price">199.000đ</p>
                <button className="add-btn" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}
