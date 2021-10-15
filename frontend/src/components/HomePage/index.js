// import React, { useState } from "react";
// import { Modal } from "../../context/Modal";
// import SignupForm from "./SignUpForm";
import { Link } from "react-router-dom";
import "./HomePage.css";
import record from "../../images/record.jpg"
import sfbridge from "../../images/sfbridge.jpg";
import car from "../../images/car.jpeg";

function HomePage() {
  //const [showModal, setShowModal] = useState(false);

  return (
    <nav>
      <div className="homeContainer">
        <img src={record} alt="record player" className="recordImg" />
        <img src={sfbridge} alt="bridge" className="bridgeImg" />
        <img src={car} alt="car" className="carImg" />
      </div>
    </nav>
  );
}

export default HomePage;