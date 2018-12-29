import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
    </nav>
)