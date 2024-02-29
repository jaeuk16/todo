import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='title'> TODO </Link>
            <Link to='/edit' className='edit'> Edit </Link>
            <Link to='/login' className='login'> Login </Link>
            <Link to='/signup' className='signup'> Sgin Up </Link>
        </nav>
    );
}

export default Navbar;