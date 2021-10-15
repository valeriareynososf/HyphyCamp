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
  <div className="allArtistsContainer">
      {user !== null ? (
        <>
          {Object.values(user).map((artist) => (
            <div key={artist.id} className="artDiv">
              <spa className="linkInfoA">
              <Link key={artist.id} to={`/artists/${artist.id}`}>
                {artist.username}:
                <br />
                <img src={artist.imgUrl} alt="ArtistImage" className="imgUrl" />
              </Link>
              </spa>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}
export default ArtistsPage;
