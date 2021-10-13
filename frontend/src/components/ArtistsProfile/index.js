import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/singleuser";
import { artistsSongs } from "../../store/songs";
import { Modal } from "../../context/Modal";
import AddSong from "./AddSong"
import { deleteSong } from "../../store/songs";

import "./profile.css";

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.single.main);
  const songs = useSelector((state) => state.songReducer.songs);
  const [showModal, setShowModal] = useState(false);
  const id = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(singleUser(+userId));
    dispatch(artistsSongs(user.id));
  }, [user.id, dispatch]);

  if (!songs) {
    return null;
  }
function deleteTrack(id) {
const deletetrack = dispatch(deleteSong(id));
if (deletetrack) {
  window.location.reload();
}
}
  
  return (
    <div className="container">
      <div className="songsList">
        songs | <button onClick={() => setShowModal(true)}>add a track </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddSong setShowModal={setShowModal} />
          </Modal>
        )}
        <br />
        {songs !== null ? (
          <div>
            {Object.values(songs).map((song) => (
              <div key={song.id} className="userSongs">
                <h2>{song.name}</h2>
                <br />
                <audio src={song.url} controls />
                <img src={song.imgUrl} alt="ArtistImage" className="songImg" />
                {id === song.artistId ? (
                  <Link to={`/songs/${song.id}/edit`}>edit track</Link>
                ) : null}
                {id === song.artistId ? (
                  <button onClick={() => deleteTrack(song.id)}>
                    delete
                  </button>
                ) : null}
              </div>
            ))}
          </div>
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
