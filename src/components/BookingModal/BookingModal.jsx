import './BookingModal.css'
import { useState } from "react";
import Modal from "../Modal/BModal";
import ModalPortal from "../ModalPortal/ModalPortal";
import './BookingModal.css'
import { CSSTransition } from "react-transition-group";

const BookingModal = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-container">
      <button className="open-modal-button" onClick={() => setShowModal(true)}>
        Book Viewing
      </button>
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

export default BookingModal;