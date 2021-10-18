import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal"
import * as sessionActions from "../../store/session";
import logogray from "../../images/logogray.png";
import AboutModal from "./AboutModal";
import SearchBar from "./Search.js"
import "./Navigation.css";

function Navigation({ isLoaded }) {
 const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
const [search, setSearch] = useState("");
const [searchValues, setSearchValues] = useState(false);

const demonLogin = async () => {
  setCredential("demo@user.io");
  setPassword("password");
  return dispatch(

    sessionActions.login({ credential: "demo@user.io", password: "password" })
  );
}

useEffect(() => {
  if (search.length) {
    setSearchValues(true);
  } else {
    setSearchValues(false);
  }
}, [search]);

const handleInput = () => {
if (search.length) {
  setSearchValues(true);
} else {
  setSearchValues(false);
}
};

const handleSpan = (e) => {
e.stopPropagation();
}

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
  }

  return (
    <nav className="navCon">
      <nav className="navbar">
        <NavLink exact to="/" className="homeLink">
          <img src={logogray} alt="record player" className="homebBtn" />
        </NavLink>
        <span onClick={handleSpan}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for songs"
            onClick={handleInput}
          />
          {searchValues && (
            <SearchBar search={search} setSearchValues={setSearchValues} />
          )}
        </span>
        <ul className="sessionLinks">
          <li>{isLoaded && sessionLinks}</li>
        </ul>
      </nav>
      <div className="discoverSentence">
        Discover amazing new music and{" "}
        <span className="midSentence">directly support</span> the artists who
        make it.
        <span className="allArtists">
          <Link to="/artists">All Artists</Link>
        </span>
        <span className="allSongs">
          <Link to="/songs">Music</Link>
        </span>
        <span>
          <AboutModal />
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
