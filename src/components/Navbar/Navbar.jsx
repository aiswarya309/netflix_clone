import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/user_profile.png'
import caret_icon from '../../assets/drop_down_icon.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Netflix Logo" />
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="Search Icon" className='icons'/>
                <p>Children</p>
                <img src={bell_icon} alt="Bell Icon" className='icons'/>
                <div className="navbar-profile">
                    <img src={profile_img} alt="Profile" className='profile'/>
                    <img src={caret_icon} alt="Dropdown Icon" className='caret'/>
                <div className="dropdown">
                    <p>Sign Out of Netflix</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar