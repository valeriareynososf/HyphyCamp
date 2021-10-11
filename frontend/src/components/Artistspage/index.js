import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from "../../store/users"
import { Link } from "react-router-dom";
import "./Artistspage.css";

function ArtistsPage() {
const dispatch = useDispatch();
const user = useSelector((store) => store.userReducer.artists);

useEffect(() => {
  dispatch(getUser(user));
}, [dispatch]);
// console.log(getUser)
console.log(user)
  return (
    <>
      <div>
    <span>Artists</span> <Link to="/songs">Songs</Link>
      </div> {user !== null ?
     <ul>
    {Object.values(user).map(artist => (
    <li key={artist.id}>{artist.username}</li>
    ))} </ul>
    : null
     }
    </>
  );
}

export default ArtistsPage;
