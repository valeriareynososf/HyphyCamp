import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSongs } from "../../store/songs";
import { getUser } from "../../store/users";

function SearchBar({ search, setSearchValues, setSearch }) {
    const dispatch = useDispatch();
    const allSongs = useSelector((store) => store.songReducer?.songs);
    const allUsers = useSelector((store) => store.userReducer?.artists);

    let songs;
    if (allSongs) {
     songs = Object.values(allSongs);
    }
    const artists = Object.values(allUsers);

  const results = songs?.filter((song) =>
    song.name?.toLowerCase().includes(search.toLowerCase())
  );
 const results2 = artists?.filter((artist) =>
   artist.username?.toLowerCase().includes(search.toLowerCase())
 );

  document.querySelector("html").addEventListener("click", () => {
    setSearchValues(false);
    setSearch("");
  });

  useEffect(() => {
    dispatch(getSongs());
    dispatch(getUser())
  }, [dispatch]);
  
  return (
    <div className="divBar">
      <ul className="searchUl">
        {results !== null ? (
          <>
            {results?.map((song) => (
              <li className="linkSearch">
                <NavLink key={song.id} to={`/songs/${song.id}`}>
                  <div>
                    <div>
                      <div>{song.name}</div>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </>
        ) : null}
        {results2 !== null ? (
          <>
            {results2?.map((artist) => (
              <li className="linkSearch">
                <NavLink key={artist.id} to={`/artists/${artist.id}`}>
                  <div>
                    <div>
                      <div>{artist.username}</div>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </>
        ) : null}
      </ul>
    </div>
  );
}

export default SearchBar;
