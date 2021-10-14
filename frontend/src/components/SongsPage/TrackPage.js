import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../../store/users";
import {singleSong } from "../../store/songs";


function TrackPage() {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const songs = useSelector((state) => state.songReducer?.songs);
const user = useSelector((store) => store.userReducer.artists);
  useEffect(() => {
    dispatch(getUser());
    dispatch(singleSong(+songId));
  }, [ dispatch, songId]);

 //const userid = songs.artistId;

  return (
    <div>
      <h2>song here</h2>
      <br />
      {songs !== null ? (
        <div>
          <div key={songs.id} className="userSongs">
            <h3>{songs.name} by{" "}
            {user !== null ? (
              <>
                {Object.values(user).map((artist) => (
                  <>
                    {songs.artistId === artist.id ? (
                      <Link key={artist.id} to={`/artists/${artist.id}`}>
                         {artist.username}:
                      </Link>
                    ) : null}
                  </>
                ))}
              </>
            ) : null}</h3> 
            <img src={songs.imgUrl} alt="SongImage" className="imgUrl" />
            <audio src={songs.url} controls />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TrackPage;
