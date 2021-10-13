import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSong } from "../../store/songs";
//import { singleSong } from "../../store/songs"
import { useParams, useHistory } from "react-router-dom";

//import { singleUser } from "../../store/singleuser";
//import { artistsSongs } from "../../store/songs";
//const songs = useSelector((state) => state.songReducer.songs);
function EditSong() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { songId } = useParams();
  const song = useSelector((store) => store.songReducer?.songs);
  
  const TRACKID = useSelector((store) => store.songReducer?.songs[songId]);
  console.log("PLEASE WPRK", TRACKID);
  //array of id songs
  //const arrayId = Object.values(song).map((song) => song.id);
  const id = useSelector((state) => state.session.user?.id);
  //const songid = useSelector((store) => store.songReducer.songs?.id);
  //console.log("this is the id", songid)
  //const song = useSelector((store) => store.songReducer?.songs);
  //const songid = useSelector((store) => store.songReducer?.songs.id);
  //console.log("hello?", song);
  //console.log("IS THIS THE ID?!", TRACKID.name);
  //const songid = Object.values(song).map((song) => song.id);
  // console.log("IS THIS THE NAMEarray", songid)
  //const user = useSelector((state) => state.single.main);
//console.log("HOW ABOUT THIS?!", song[TRACKID].name);
  const [name, setName] = useState(TRACKID.name);
  const [imgUrl, setImgUrl] = useState(TRACKID.imgUrl);
  const [url, setUrl] = useState(TRACKID.url);
  const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name) setErrors(["Name field is required"]);
      if (!url) setErrors(["A url to the track is required"]);
      //   if (!imgUrl) setErrors(["An img field is required"]);
      //if (!errors.length) {
          const editedSong = dispatch(editSong({ name, imgUrl, url }, TRACKID.id));
          if (editedSong) {
              history.push(`/artists/${id}`);
     }
    //dispatch(editSong({ name, imgUrl, url }, TRACKID.id));
      }
const handleCancelClick = (e) => {
  e.preventDefault();
  history.push(`/artists/${id}`);
};
    //};
//   useEffect(() => {
//     dispatch(editSong({ name, imgUrl, url }, TRACKID));
//   }, [dispatch]);
  //   useEffect(() => {
  //     //dispatch(singleUser(+userId));
  //     dispatch(artistsSongs(user.id));
  //   }, [user.id, dispatch]);
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
        <button type="submit">Update Track</button>
        
      </form>
      <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
    </>
  );
}

export default EditSong;
