import React, { useState } from 'react';
import { link } from "react-router-dom";


function navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <link to="/" className='navbar-logo'></link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link to='/listings' className='nav-links' onClick={closeMobileMenu}>
                            Listings
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                            Sign In
                        </link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default navbar