import { useState } from 'react'
import './Header.css'
import homeLogo from '../../assets/Vectorhome-logo.svg'
// import heart from '../../assets/Vectorheart.png'
// import menu from '../../assets/Vectormenu.png'
import unilife from '../../assets/UniLifeLogo.png'
import { Link } from 'react-router-dom'
// import ContactModal from '../ContactModal/ContactModal'
import { AiOutlineMail } from 'react-icons/ai'
import Modal from 'react-modal'

function Header() {

//create state for modal - initialize as false
const [isOpen, setIsOpen] = useState(false)
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px'
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));
//'root' above references the root element, for screen read accessibility

  return (
    <div className='header-container'>
        <div className="btns-container">
            <Link to='/' className="logo-container">
                <img src={homeLogo} alt='UniLife Logo' />
                <img src={unilife} alt='Unilife' className='unilife'/>
            </Link>
            <div className='contact-btn'
                onClick={()=>setIsOpen(true)}>
                    <AiOutlineMail className='mail-icon'/>
                    <p>Contact Us</p>
                    </div>
                {/* if you pass a param to a func, must use arrow syntax */}
            <Modal
            isOpen={isOpen}
            //input state above
            style={customStyles}
            //object on top of doc controls this modal's styling
            onRequestClose={()=>setIsOpen(false)}
        // onRequestClose={closeModal} - can close modal by clicking outside of
        contentLabel="Contact Us Modal"
      >

        <div className="text-icon">
          <h2>Contact Us</h2> 
            <AiOutlineMail className="icon"/>
        </div>
        <div className="p">
          <p>Feel free to contact us if you have any questions.</p>
          <p>Looking forward to hearing from you!</p>
        </div>
        <form className="form">
            <div className="form-left">
                <label className='modal-label' htmlFor="name">Name</label>
                <input className="modal-input" required type="text" placeholder="Enter your name" id="name"></input>
                <label className='modal-label' htmlFor="phone" required>Phone Number</label>
                <input className="modal-input" type="number" placeholder="Enter your phone number" id="phone"></input>
                <label className='modal-label' htmlFor="modal-dropdown">Are you a...</label>
                <select id='modal-dropdrown'>
                    <option>Student</option>
                    <option>Parent</option>
                </select>
                <label className='modal-label' htmlFor="email" required>Email</label>
                <input className="modal-input" type="email" placeholder="Enter your email address" id="email"></input>
            </div>
            <div className="form-right">
                <label htmlFor="message">Message</label>
                <textarea cols='35' rows='15' id="message" placeholder="Enter you message"></textarea>
            <button className="view-btn" onClick={()=>setIsOpen(false)}>Submit</button>
            </div>
        </form>
      </Modal>
            {/* <ContactModal className='contact-us-btn'/> */}
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