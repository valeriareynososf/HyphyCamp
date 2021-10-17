import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import About from "./About";
import "./Navigation.css"

function AboutModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="aboutBtn">
        About
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <About />
        </Modal>
      )}
    </>
  );
}

export default AboutModal;
