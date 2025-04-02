import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets.js'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos sunt? Laudantium, eaque adipisci obcaecati quaerat voluptas suscipit cum assumenda itaque veniam illum, a deleniti hic aliquid possimus consequatur doloremque?
                Quos iure quam rem magni distinctio, eos, quibusdam similique vel quod laboriosam libero quas corporis. Porro sit, libero delectus aperiam similique hic facere temporibus aspernatur exercitationem, possimus, aliquid ut dolor.
                Hic eius nobis illo, aspernatur suscipit ab numquam laboriosam doloribus nihil culpa placeat sed doloremque iusto exercitationem quam eos, velit impedit aliquam ipsam repellat! Magnam est minus animi maiores maxime?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+10-23-456-789</li>
                    <li>contactMe@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © Tomato.Com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
