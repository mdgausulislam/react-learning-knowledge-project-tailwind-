import React from 'react';
import logo from '../../assets/images/profile.png';
import './Header.css'

const Header = () => {
    return (
        <nav className="flex items-center justify-between mx-24 mt-4">
            <h1 className="font-bold text-xl">The Learning Knowledge</h1>

            <div className="flex items-center justify-between">
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/bookmark">Bookmark</a>
                <a href="/login">Login</a>
                <img src={logo} alt="" />
            </div>

        </nav>
    )
};

export default Header;