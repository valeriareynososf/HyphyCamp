import React, { useEffect, useState } from "react";
//import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/singleuser";
import { artistsSongs } from "../../store/songs";
import { Modal } from "../../context/Modal";
import AddSong from "./AddSong"

import "./profile.css";

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.single.main);
  const songs = useSelector((state) => state.songReducer.songs);
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    dispatch(singleUser(+userId));
    dispatch(artistsSongs(user.id));
  }, [user.id, dispatch]);

  if (!songs) {
    return null;
  }
  return (
    <div className="container">
      <div className="songsList">
        songs | <button onClick={() => setShowModal(true)}>add a track </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddSong />
          </Modal>
        )}
        <br />
        {songs !== null ? (
          <ul>
            {Object.values(songs).map((song) => (
              <li key={song.id} className="userSongs">
                {song.name}
                <br />
                <img src={song.imgUrl} alt="ArtistImage" className="songImg" />
                <audio src={song.url} controls />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="profileInfo">
        <img src={user.imgUrl} alt="ArtistImage" className="profileImg" />
        <div>{user.username}</div>
      </div>
    </div>
  );
}

export default ArtistsProfile;
