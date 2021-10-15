import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal"
import * as sessionActions from "../../store/session";
import homeImg from "../../images/homeImg.png";
import logogray from "../../images/logogray.png";

//import {csrfFetch} from "../../store/csrf";
//import {demologin} from "../../store/session"

import "./Navigation.css";

function Navigation({ isLoaded }) {
 const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

const demonLogin = async () => {
  setCredential("demo@user.io");
  setPassword("password");
  return dispatch(

    sessionActions.login({ credential: "demo@user.io", password: "password" })
  );
}
  let paragraph;
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button onClick={demonLogin} className="demoBtn">
          demo login
        </button>
      </>
    );
    paragraph = (
      <>
        Discover amazing new music and directly support the artists who make it.
      </>
    );
  }

  return (
    <nav className="navCon">
      <nav className="navbar">
        {/* <img src={logogray} alt="record player" className="homebBtn" /> */}
        {/* LOGO BUTTON */}
        <NavLink exact to="/" className="homeLink">
          <img src={logogray} alt="record player" className="homebBtn" />
        </NavLink>
        <ul className="sessionLinks">
          <li>{isLoaded && sessionLinks}</li>
        </ul>
      </nav>
      <div>{paragraph}</div>
    </nav>
  );
}

export default Navigation;
