import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Almaaz</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>services</li>
                    <li>experince</li>
                    <li>portfolio</li>
                    <li>testimonial</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Navbar