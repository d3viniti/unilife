import './BookingModal.css'
import { useState } from "react";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import { CSSTransition } from "react-transition-group";

const BookingModal = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Modal with Backdrop sample</h1>
      <button className="button" onClick={() => setShowModal(true)}>
        Show Modal
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