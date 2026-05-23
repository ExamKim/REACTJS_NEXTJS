import React from 'react'
import ProductItem from './ProductItem';

export default function ProductList() {

    const products = [
        { id: 1, name: "Laptop", price: 1500 },
        { id: 2, name: "Phone", price: 800 },
    ];



    return (
        <div>
            {products.map(p => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    )
}
