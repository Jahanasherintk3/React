import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
           <nav className='navbar navbar-dark bg-dark navbar-expand'>
            <Link to="/" className='navbar-brand'>RESTAURENT</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link className='nav-link' to="/home">Home</Link></li>
                    <li className='nav-link'><Link className='nav-link' to="/about">About</Link></li>
                    <li className='nav-link'><Link className='nav-link' to="/testimonials">Testimonials</Link></li>
                    <li className='nav-list'><Link className='nav-link' to="/contact">Contact</Link></li>
                </ul>
            </div>
           </nav>
        </div>
    )
}

export default Navbar;