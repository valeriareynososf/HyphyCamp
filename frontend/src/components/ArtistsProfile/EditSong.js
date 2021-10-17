import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSong } from "../../store/songs";
import { useParams, useHistory } from "react-router-dom";
import { getSongs } from "../../store/songs";
//import {singleSong} from "../../store/songs";
import "./profile.css"

function EditSong() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { songId } = useParams();
  //const TRACKID = useSelector((store) => store.songReducer?.songs[songId]);
  const TRACKID = useSelector((store) => store.songReducer?.songs?.[songId]);

  const id = useSelector((state) => state.session.user?.id);
  const [name, setName] = useState(TRACKID?.name);
  const [imgUrl, setImgUrl] = useState(TRACKID?.imgUrl);
  const [url, setUrl] = useState(TRACKID?.url);
  const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
    const editedSong = dispatch(editSong({ name, imgUrl, url }, songId));
    if (editedSong) {
        history.push(`/artists/${id}`);
     }}
      

const handleCancelClick = (e) => {
  e.preventDefault();
  history.push(`/artists/${id}`);
};

  useEffect(() => {
    const errors = [];
    if (!name) errors.push("Name field is required");
    if (!url) errors.push("A url to the track is required");
    setErrors(errors);
    dispatch(getSongs());
  }, [name, url, dispatch]);

// useEffect(() => {
//   if (TRACKID) {
//     setName(TRACKID.name);
//     setImgUrl(TRACKID.imgUrl);
//     setUrl(TRACKID.url);
//   }
// }, [TRACKID]);

  return (
    <div className="editSongContainer">
      <form onSubmit={handleSubmit} className="editSongForm">
        <label>Track Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Image</label>
        <br />
        <input
          type="text"
          placeholder="image url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <br />
        <label>Add Audio</label>
        <br />
        <input
          type="text"
          placeholder="track url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <button type="submit" disabled={errors.length > 0} className="updateTrackBtn">
          Update Track
        </button>
      </form>
      <br />
      <button
        type="button"
        onClick={handleCancelClick}
        className="cancelEditBtn"
      >
        Cancel
      </button>
    </div>
  );
}

export default EditSong;
