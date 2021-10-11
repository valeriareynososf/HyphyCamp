// import React, { useState } from "react";
// import { Modal } from "../../context/Modal";
// import SignupForm from "./SignUpForm";
import { Link } from "react-router-dom";
import "./HomePage.css";
import record from "../../images/record.jpg"

function HomePage() {
  //const [showModal, setShowModal] = useState(false);

  return (
    <nav>
      <h2>HOMEPAGE</h2>
      <p><Link to="/artists">go to artists</Link></p>
      <img src={record} alt="record player" className="homeImg"/>
    </nav>
  );
}

export default HomePage;