import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="content-container">
        <div className="blue-block">
          <div className="email">
          <h3>Keep in touch</h3>
          <p className='email-p'>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
          <input placeholder='Your email'></input>
          </div>
         <div className="social">
          <h3>Let's Socialize</h3>
          <div className="socials">
            <a href='https://www.facebook.com' className="social-link">
              <BsFacebook />
              <p>Facebook</p>
            </a>
            <a href="https://www.instagram.com" className="social-link">
              <BsInstagram/>
              <p>Instagram</p>
            </a>
            <a href="https://www.twitter.com" className="social-link">
              <BsTwitter/>
              <p>Twitter</p>
            </a>
          </div>
        </div>
      </div>  
      <div className="black-block">
        <div className="left">
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookie Policies</p>
        </div>
        <div className="right">
          <p>2022</p>
          <p><span>&copy;</span> unilife</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Footer