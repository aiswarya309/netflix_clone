import React from 'react'
import './Footer.css'
import facebook_icon from "../../assets/facebook_icon.jpg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={facebook_icon} alt="Facebook" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs </li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997 - 2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer