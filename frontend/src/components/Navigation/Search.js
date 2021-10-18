import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSongs } from "../../store/songs";

function SearchBar({ search, setSearchValues }) {
    const dispatch = useDispatch();
  const songs = Object.values(useSelector((store) => store.songReducer?.songs));
  const results = songs.filter((song) =>
    song.name?.toLowerCase().includes(search.toLowerCase())
  );
  document.querySelector("html").addEventListener("click", () => {
    setSearchValues(false);
  });

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  
  return (
    <div>
      <ul>
        {results.map((song) => (
          <li>
            <NavLink key={song.id} to={`/songs/${song.id}`}>
              <div>
                <div>
                  <div>{song.name}</div>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
