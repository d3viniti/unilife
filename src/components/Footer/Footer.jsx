import React from 'react'
import './Footer.css'

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
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
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
          <p>copyright unilife</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Footer