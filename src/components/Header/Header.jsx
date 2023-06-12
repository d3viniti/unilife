import React from 'react'
import './Header.css'
import homeLogo from '../../assets/Vectorhome-logo.svg'
import heart from '../../assets/Vectorheart.png'
import mail from '../../assets/Vectormail.png'
import menu from '../../assets/Vectormenu.png'
import unilife from '../../assets/UniLifeLogo.png'

function Header() {
  return (
    <div className='header-container'>
        <div className="btns-container">
            <div className="logo-container">
                <img src={homeLogo} alt='UniLife Logo' />
                <img src={unilife} alt='Unilife' className='unilife'/>
            </div>
            <div className="header-btns">
                <div className="shortlist white">
                    <img src={heart} alt='heart' className='heart-icon' />
                    <p className='header-btn-text'>Shortlist</p>
                </div>
                <div className="contact white">
                    <img src={mail} alt='Contact us Button' className='mail-icon' />
                    <p className='header-btn-text'>Contact Us</p>
                </div>
                <img src={menu} className='menu'/>
            </div>
        </div>
    </div>
  )
}

export default Header