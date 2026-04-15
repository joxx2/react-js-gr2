import React from 'react'
import { useParams } from "react-router-dom";

function Products() {
    const { id } = useParams();

    return (
        <div>
            Product with id: {id}
        </div>
    )
}

export default Products
