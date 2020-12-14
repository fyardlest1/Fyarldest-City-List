import React from 'react'
import logo from '../../logo.svg'

import './Navbar.scss'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Site logo"/>
            <ul className='nav-links'>
                <li>
                    <a href="/" className='nav-link'>home</a>
                </li>
                <li>
                    <a href="/about" className='nav-link'>about</a>
                </li>
                <li>
                    <a href="/tours" className='nav-link active'>tours</a>
                </li>
            </ul>
        </nav>
    )
}
