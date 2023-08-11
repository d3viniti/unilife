import { useState } from "react";

const Modal = (props) => {
  const [status, setStatus] = useState(true);

  return (
    <div className="modal">
      <h2>This is modal</h2>
      <button
        className="button"
        onClick={() => setStatus((prevState) => !prevState)}
      >
        Toggle Status
      </button>
      <button className="button" onClick={props.onClick}>
        Close Modal
      </button>

      <h4>{`current status: ${status}`}</h4>
    </div>
  );
};

export default Modal;