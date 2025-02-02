import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='' className="logo"/>
            <p>Savor the taste of convenience with our food delivery service! From local favorites to international cuisines, we bring your cravings to life with just a few clicks. Fresh, fast, and always delightful—let us deliver happiness to your doorstep!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon}  alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.insta_icon} alt="" />
                <img src={assets.youtube} alt="" />
                
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94 777 171 714</li>
                <li>contact@vitto.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright © 2025 Vitto Limited – All rights reserved.
      </p>
    </div>
  )
}

export default Footer
