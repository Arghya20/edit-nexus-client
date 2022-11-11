import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal }) => {
  return (
    <div>
      <div className="flex justify-center my-40">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Update Review</h1>
          </div>
          <div className="body">
            <p>Update Your Review</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Updated</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
