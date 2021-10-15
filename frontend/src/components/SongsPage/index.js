import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
 import {Link} from "react-router-dom";
import "./allmusic.css";

function SongsPage() {
  const dispatch = useDispatch();
  const song = useSelector((store) => store.songReducer.songs);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  return (
    <div className="allTracksContainer">
      {song !== null ? (
        <>
          {Object.values(song).map((single) => (
            <div key={single.id} className="tracksDiv">
              <Link key={single.id} to={`/songs/${single.id}`}>
                <img src={single.imgUrl} alt="SongImage" className="allsongImg" />
                <br />
              {single.name}
              </Link>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}
export default SongsPage;
