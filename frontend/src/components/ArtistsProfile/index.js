import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/singleuser";
import { artistsSongs } from "../../store/songs";

import "./profile.css"

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
const user = useSelector((state) => state.single.main);
const songs = useSelector((state) => state.songReducer.songs);

  useEffect(() => {
    dispatch(singleUser(+userId));
    dispatch(artistsSongs(user.id));
  }, [user.id, dispatch]);

if (!songs) {
  return null;
}
  return (
    <div className="container">
      <div className="songsList">
        songs
        <br />
        {songs !== null ? (
          <ul>
            
            {Object.values(songs).map((song) => (
              <li key={song.id} className="userSongs">
                {song.name}
                <br />
                <img src={song.imgUrl} alt="ArtistImage" className="songImg"/>
                <audio src={song.url} controls/>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="profileInfo">
        <img src={user.imgUrl} alt="ArtistImage" className="profileImg" />
        <div>{user.username}</div>
      </div>
    </div>
  );

}

export default ArtistsProfile;
