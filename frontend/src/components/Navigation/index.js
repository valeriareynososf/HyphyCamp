import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal"
import * as sessionActions from "../../store/session";
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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button onClick={demonLogin} className="demoBtn">demo login</button>
      </>
    );
  }

  return (
    <nav className="navbar">
      <NavLink exact to="/">
          hyphycamp
      </NavLink>
      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
