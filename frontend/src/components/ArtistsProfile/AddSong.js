import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong } from "../../store/songs";
//import * as sessionActions from "../../store/session";

function AddSong({setShowModal}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const id = useSelector((state) => state.session.user?.id);

  const handleSubmit = (e) => {
    e.preventDefault();
      setShowModal(false)
      return dispatch(addSong({ name, imgUrl, url }, id));
  };
  
  useEffect(() => {
    const errors = [];
    if (!name) errors.push("Name field is required");
    if (!url) errors.push("A url to the track is required");
    setErrors(errors);
  }, [name, url]);

 const handleCancelClick = (e) => {
   setShowModal(false);
 };

  return (
    <>
      <button type="button" onClick={handleCancelClick}>
        <span role="img" aria-label="cancel">
          ｘ
        </span>
      </button>
      <form onSubmit={handleSubmit} className="addSongForm">
        {/* <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul> */}
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
        <button type="submit" disabled={errors.length > 0}>
          Add Track
        </button>
      </form>
    </>
  );
}

export default AddSong;
