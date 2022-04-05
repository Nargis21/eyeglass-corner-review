import React from 'react';
import CustomLink from '../CustomLink/CustomLink'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/review'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Navbar;