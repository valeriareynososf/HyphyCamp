import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Link, useHistory } from "react-router-dom";

import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  let history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    const logginout = dispatch(sessionActions.logout());
    if(logginout){
      history.push(`/`);
    }
  };

  return (
    <>
      <button onClick={openMenu} className="profileBtn">
        {/* <i className="far fa-user-circle" /> */}
      </button>
      {showMenu && (
        <div className="profileDropdownDiv">
        <ul className="profile-dropdown">
          <li className="proLink">
            <Link key={user.id} to={`/artists/${user.id}`}>
              {user.username}
            </Link>
          </li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout} className="logOutDrop">Log Out</button>
          </li>
        </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
