import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => useContext(ThemeContext);

function Button({ children, variant = 'primary' }) {
    const { theme, toggleTheme } = useTheme();

    const baseStyle = {
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.3s ease',
    };

    const variants = {
        primary: {
            background: theme === 'light' ? '#0d6efd' : '#6ea8fe',
            color: 'white',
        },
        secondary: {
            background: theme === 'light' ? '#6c757d' : '#adb5bd',
            color: 'white',
        },
    };

    return (
        <button
            onClick={toggleTheme}
            style={{ ...baseStyle, ...variants[variant] }}
        >
            {children} (toggle theme)
        </button>
    );
}

function Page() {
    const { theme } = useTheme();

    const pageStyle = {
        padding: '40px',
        minHeight: '100vh',
        transition: 'all 0.4s ease',
        background: theme === 'light' ? '#f8f9fa' : '#121212',
        color: theme === 'light' ? '#212529' : '#e0e0e0',
    };

    return (
        <div style={pageStyle}>
            <h1>Theme Manager – Context API</h1>

            <div style={{ margin: '30px 0', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Button>   DARK </Button>
                <Button variant="secondary"> LIGHT</Button>
            </div>

            <div
                style={{
                    marginTop: '40px',
                    padding: '20px',
                    borderRadius: '12px',
                    background: theme === 'light' ? '#ffffff' : '#1e1e1e',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
            >
                <h3>Theme hiện tại: {theme.toUpperCase()}</h3>
                <p>Thay đổi sẽ áp dụng toàn app ngay lập tức!</p>
            </div>
        </div>
    );
}

function Layout() {
    return <Page />;
}

export default function Bai2() {
    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    );
}