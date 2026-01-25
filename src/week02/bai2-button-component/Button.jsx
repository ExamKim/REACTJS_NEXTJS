import './Button.css'

export function Button({ type = 'primary', children }) {
    return (
        <button className={`btn btn-${type}`}>
            {children}
        </button>
    )
}

export function ButtonDemo() {
    return (
        <div style={{ padding: 40 }}>
            <Button type="primary">Primary</Button>
            <br /><br />

            <Button type="success">Success</Button>
            <br /><br />

            <Button type="danger">Danger</Button>
        </div>
    )
}
