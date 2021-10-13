import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSong } from "../../store/songs";
//import { singleSong } from "../../store/songs"
import { useParams } from "react-router-dom";

//import { singleUser } from "../../store/singleuser";
//import { artistsSongs } from "../../store/songs";
//const songs = useSelector((state) => state.songReducer.songs);
function EditSong({tracks}) {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector((store) => store.songReducer?.songs);
  const TRACKID = useSelector((store) => store.songReducer?.songs[songId]);
  console.log("PLEASE WPRK", TRACKID);
  //array of id songs
  const arrayId = Object.values(song).map((song) => song.id);
  //const song_id = tracks.find((tracks) => tracks.id === songId);
  //    const song_id = useSelector((state) => {
  //      return songid.map((IDsong) => state.song_id[IDsong]);
  //    });
  //console.log("is this working??", song_id);
  //    console.log("PLEASESE", song_id)
  const id = useSelector((state) => state.session.user?.id);
  //const songid = useSelector((store) => store.songReducer.songs?.id);
  //console.log("this is the id", songid)
  //const song = useSelector((store) => store.songReducer?.songs);
  //const songid = useSelector((store) => store.songReducer?.songs.id);
  console.log("hello?", song);
  console.log("IS THIS THE ID?!", TRACKID.name);
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
      if (!errors.length) {
        setErrors([]);
          dispatch(editSong({ name, imgUrl, url }, TRACKID.id));
      }
    };
//   useEffect(() => {
//     dispatch(editSong({ name, imgUrl, url }, TRACKID));
//   }, [dispatch]);
  //   useEffect(() => {
  //     //dispatch(singleUser(+userId));
  //     dispatch(artistsSongs(user.id));
  //   }, [user.id, dispatch]);
  return (
    <>
      <form onClick={handleSubmit}>
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
    </>
  );
}

export default EditSong;
