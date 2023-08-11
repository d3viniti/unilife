import React from 'react'
import './Header.css'
import homeLogo from '../../assets/Vectorhome-logo.svg'
import heart from '../../assets/Vectorheart.png'
import menu from '../../assets/Vectormenu.png'
import unilife from '../../assets/UniLifeLogo.png'
import { Link } from 'react-router-dom'
import ContactModal from '../ContactModal/ContactModal'

function Header() {
  return (
    <div className='header-container'>
        <div className="btns-container">
            <Link to='/' className="logo-container">
                <img src={homeLogo} alt='UniLife Logo' />
                <img src={unilife} alt='Unilife' className='unilife'/>
            </Link>
            <ContactModal className='contact-us-btn'/>
            {/* <div className="header-btns"> */}
                {/* <div className="shortlist white">
                    <img src={heart} alt='heart' className='head-heart-icon' />
                    <p className='header-btn-text'>Shortlist</p>
                </div> */}
                {/* <div className="contact white">
                    <img src={mail} alt='Contact us Button' className='head-mail-icon' />
                    <p className='header-btn-text'>Contact Us</p>
                </div> */}
               
                {/* <img src={menu} className='menu'/> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default Header