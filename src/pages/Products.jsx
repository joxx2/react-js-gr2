import React from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const products = [
        {
            id: 1,
            name: "Iphone 15"
        },
        {
            id: 2,
            name: "Iphone 16"
        },
        {
            id: 3,
            name: "Iphone 17"
        }
    ];
    return (
        <div>
            {products.map(product => (
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            ))}
        </div>
    )
}

export default Products