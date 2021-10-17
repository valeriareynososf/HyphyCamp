import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/singleuser";
import { artistsSongs } from "../../store/songs";
import { Modal } from "../../context/Modal";
import AddSong from "./AddSong"
import { deleteSong } from "../../store/songs";
import EditProfile from "./EditProfile.js";
// import { editUser } from "../../store/singleuser";
// import { getUser } from "../../store/users";
import "./profile.css";

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.single.main);
  const songs = useSelector((state) => state.songReducer.songs);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
 const onClickEdit = () => {setShowEdit(true);};

  const id = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(singleUser(+userId));
    if (user.id){
       dispatch(artistsSongs(user.id));
    }
  }, [user.id, dispatch, userId]);

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
      {songs !== null ? (
        <>
          <div className="songsList">
            {Object.values(songs).map((song) => (
              <div key={song.id} className="userSongs">
                <div className="editDeleteBtns">
                  {id === song.artistId ? (
                    <Link
                      to={`/songs/${song.id}/edit`}
                      key={song.id}
                      className="editLinkTrack"
                    >
                      edit track
                    </Link>
                  ) : null}
                  {id === song.artistId ? (
                    <button
                      onClick={() => deleteTrack(song.id)}
                      className="deleteTrakbtn"
                    >
                      delete
                    </button>
                  ) : null}
                  {/* <img src={song.imgUrl} alt="ArtistImage" className="songImg" /> */}
                </div>
                {/* <img src={song.imgUrl} alt="ArtistImage" className="songImg" /> */}
                <Link
                  to={`/songs/${song.id}`}
                  key={id}
                  className="songTitlePro"
                >
                  <h2>{song.name}</h2>
                </Link>
                <br />
                <audio src={song.url} controls />
              </div>
            ))}
          </div>
          <div className="divSongImg">
            {Object.values(songs).map((song) => (
              <img src={song.imgUrl} alt="ArtistImage" className="songImg" />
            ))}
          </div>
        </>
      ) : null}
      <div className="profileInfo">
        <img src={user.imgUrl} alt="ArtistImage" className="profileImg" />
        <div className="usernamePro">{user.username}</div>
        {user.id === id ? (
          <>
            <button onClick={() => setShowModal(true)}>add a track </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <AddSong setShowModal={setShowModal} />
              </Modal>
            )}
          </>
        ) : null}
        {user.id === id && user.id !== 1 ? (
          <>
            {/* <Link to={`/artists/${id}/edit`} key={id}>
              edit profile
            </Link> */}
            <button onClick={onClickEdit}>edit profile</button>
            {showEdit ? <EditProfile user={user} close={setShowEdit} /> : null}
          </>
        ) : null}
      </div>
    </div>
  );
}


export default ArtistsProfile;
