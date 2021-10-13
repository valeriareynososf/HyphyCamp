import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSong } from "../../store/songs";


function EditSong({songid}) {
    console.log("HHola?", songid);
    const dispatch = useDispatch();
   const id = useSelector((state) => state.session.user?.id);
   const song = useSelector((store) => store.songReducer?.songs);
    console.log("ola?", song)
    const [name, setName] = useState(song.name);
    const [imgUrl, setImgUrl] = useState(song.imgUrl);
    const [url, setUrl] = useState(song.url);
    const [errors, setErrors] = useState([]);
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) setErrors(["Name field is required"]);
//     if (!url) setErrors(["A url to the track is required"]);
//     //   if (!imgUrl) setErrors(["An img field is required"]);
//     if (!errors.length) {
//       setErrors([]);
//         dispatch(editSong({ name, imgUrl, url }, id));
//     }
//   };
    useEffect(() => {
     dispatch(editSong({ name, imgUrl, url }, id));
    }, [dispatch]);

  return (
    <>
      <form>
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
