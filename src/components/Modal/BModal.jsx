import { useState } from "react";
import {BsFillHouseAddFill} from 'react-icons/bs'
import './Cmodal.css'

const Modal = (props) => {

  return (
    <div className="modal">
      <div className="text-icon">
        <div className="text">
          <h2>Book a Viewing</h2>
          {/* <p>address of specific property</p> */}
        </div>
        <BsFillHouseAddFill className="icon"/>
      </div>
      <div className="form">
        <div className="form-left">
          <label className='modal-label' htmlFor="name">Name</label>
          <input className="modal-input" required type="text" placeholder="Enter your name" id="name"></input>
          <label className='modal-label' htmlFor="email" required>Email</label>
          <input className="modal-input" type="email" placeholder="Enter your email address" id="email"></input>
          <label className='modal-label' htmlFor="phone" required>Phone Number</label>
          <input className="modal-input" type="number" placeholder="Enter your phone number" id="phone"></input>
        </div>
        <div className="form-right">
          <label htmlFor="message">Message</label>
          <textarea cols='35' rows='15' id="message" placeholder="Enter you message"></textarea>
          <button className="view-button" onClick={props.onClick}>Submit</button>
        </div>
       
      </div>
      {/* <button
        className="button"
        onClick={() => setStatus((prevState) => !prevState)}
      >
        Toggle Status
  </button> */}
    </div>
  );
};

export default Modal;