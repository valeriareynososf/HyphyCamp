import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/singleuser";
import {singleSong } from "../../store/songs";

function TrackPage() {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const songs = useSelector((state) => state.songReducer?.songs);
  console.log("wtf", songs)
  //const TRACKID = useSelector((store) => store.songReducer?.songs[+songId]);
  //const user = useSelector((state) => state.single.main);
//console.log("what is going on", +TRACKID.id)
  useEffect(() => {
    //dispatch(singleUser(+TRACKID.id));
    dispatch(singleSong(+songId));
  }, [ dispatch]);

  return (
    <div>
      <h2>song here</h2>
      {/* <p>{user.name}</p> */}
      {/* {TRACKID.name} by {TRACKID.artistId} */}
      <br />
      {songs !== null ? (
        <div>
         {/* {Object.values(songs).map((song) => ( */}
              <div key={songs.id} className="userSongs">
                <h3>{songs.name}</h3>
                </div>
                {/* ))} */}
        </div>
      ) : null}
    </div>
  );
}

export default TrackPage;
