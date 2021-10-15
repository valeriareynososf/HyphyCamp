import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
 import {Link} from "react-router-dom";

function SongsPage() {
  const dispatch = useDispatch();
  const song = useSelector((store) => store.songReducer.songs);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  return (
    <>
      {song !== null ? (
        <ul>
          {Object.values(song).map((single) => (
            <li key={single.id}>
              <Link key={single.id} to={`/songs/${single.id}`}>
                {single.name}:
                <br />
                <img src={single.imgUrl} alt="SongImage" className="imgUrl" />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
export default SongsPage;
