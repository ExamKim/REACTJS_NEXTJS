import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className="page">
            <h1>404 Not Found</h1>
            <p>Trang ban tim khong ton tai.</p>
            <p>
                Quay lai <Link to="/">Home</Link>
            </p>
        </section>
    )
}

export default NotFound
