import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSong } from "../../store/songs";
import { useParams, useHistory } from "react-router-dom";

function EditSong() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { songId } = useParams();
  const TRACKID = useSelector((store) => store.songReducer?.songs[songId]);
  const id = useSelector((state) => state.session.user?.id);
  const [name, setName] = useState(TRACKID.name);
  const [imgUrl, setImgUrl] = useState(TRACKID.imgUrl);
  const [url, setUrl] = useState(TRACKID.url);
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
  }, [name, url]);

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={errors.length > 0}>
          Update Track
        </button>
      </form>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </>
  );
}

export default EditSong;
