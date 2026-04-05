import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="page">
            <h1>Home</h1>
            <p>Chao mung ban den HOMEEEEEEEEEEEEEE.</p>
            <p>
                Xem danh sach san pham tai <Link to="/products">/products</Link>.
            </p>
        </section>
    )
}

export default Home
