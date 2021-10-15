import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from "../../store/users"
import { Link, NavLink } from "react-router-dom";
import "./Artistspage.css";

function ArtistsPage() {
const dispatch = useDispatch();
const user = useSelector((store) => store.userReducer?.artists);

useEffect(() => {
  dispatch(getUser());
}, [dispatch]);

  return (
    <div className="artistsList">
      <div>
      </div>{" "}
      {user !== null ? (
        <ul>
          {Object.values(user).map((artist) => (
            <li key={artist.id}>
              <Link key={artist.id} to={`/artists/${artist.id}`}>
                {artist.username}:
                <br />
                <img src={artist.imgUrl} alt="ArtistImage" className="imgUrl" />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default ArtistsPage;
