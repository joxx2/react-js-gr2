import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Product</Link>
        </nav>
    )
}

export default Header
