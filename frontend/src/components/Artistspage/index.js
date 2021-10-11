import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getUser} from "../../store/session"
import { Link } from "react-router-dom";


function ArtistsPage({user}) {
    // const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getUser(user));
// }, [dispatch, user]);
// console.log(getUser)
console.log(user)
  return (
    <nav>
      <h2>HELLOartist</h2>
      <u>
        {/* <li>{user.username}</li> */}
      </u>
      {/* {user.username} */}
      {/* <ul>
      {user.map((u) => (
          <li>{u.username}</li>
      ))} */}
      {/* {user.map((u) => (
        <Link key={u.id} to={`/artists/${u.id}`}>
          {u.username}
        </Link>
      ))} */}
      {/* </ul> */}
    </nav>
  );
}

export default ArtistsPage;
