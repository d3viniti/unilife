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
          <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
          <input placeholder='Your email'></input>
          </div>
         <div className="social">
          <h3>Let's Socialize</h3>
          <div className="socials">
              <a><BsFacebook/> Facebook</a>
              <a><BsInstagram/> Instagram</a>
              <a><BsTwitter/> Twitter</a>
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