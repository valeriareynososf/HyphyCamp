import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
// import {Link} from "react-router-dom";

function SongsPage() {
  const dispatch = useDispatch();
  const song = useSelector((store) => store.songReducer.songs);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  return (
    <>
      <h2>hello these are the songs</h2>
      {song !== null ? (
        <ul>
          {Object.values(song).map((single) => (
            <li key={single.id}>{single.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
export default SongsPage;
