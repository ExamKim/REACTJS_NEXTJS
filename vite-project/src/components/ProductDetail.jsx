import { useParams } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams()

    return (
        <section className="page">
            <h1>Product Detail</h1>
            <p>Product ID: {id}</p>
        </section>
    )
}

export default ProductDetail
