// import './ContactModal.css'
import { useState } from "react";
import Modal from "../Modal/CModal";
import ModalPortal from "../ModalPortal/ModalPortal";
import { CSSTransition } from "react-transition-group";
import mail from '../../assets/Vectormail.png'
// import '../ContactModal/ContactModal.css'


const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-container">
      <div className="open-cmodal-button" onClick={() => setShowModal(true)}>
      <img src={mail}/>
        <p>Contact us</p>
      </div>
      <ModalPortal show={showModal} onClick={onClickHandler}>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showModal}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
          <Modal onClick={onClickHandler} />
        </CSSTransition>
      </ModalPortal>
    </div>
  );
};

export default ContactModal;