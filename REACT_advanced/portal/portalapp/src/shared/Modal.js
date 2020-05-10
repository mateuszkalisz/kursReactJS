import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = () =>{

    const modal = (
        <div className="overlay">
            <h2 className="overlayContent">This is modal</h2>
        </div>
    )

    return ReactDOM.createPortal(modal, document.querySelector("#modal"));
}

export default Modal;