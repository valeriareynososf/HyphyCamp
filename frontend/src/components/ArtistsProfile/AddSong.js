import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong } from "../../store/songs";
import * as sessionActions from "../../store/session";

function AddSong({setShowModal}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const id = useSelector((state) => state.session.user?.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) setErrors(["Name field is required"]);
    if (!url) setErrors(["A url to the track is required"]);
    //   if (!imgUrl) setErrors(["An img field is required"]);
    if (!errors.length) {
      setErrors([]);
      setShowModal(false)
      return dispatch(addSong({ name, imgUrl, url }, id));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="addSongForm">
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label>Track Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          placeholder="image url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <br />
        <label>Add Audio</label>
        <input
          type="text"
          placeholder="track url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <button type="submit">Add Track</button>
      </form>
    </>
  );
}

export default AddSong;
