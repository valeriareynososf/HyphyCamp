import { csrfFetch } from "./csrf";

const LOAD = "songs/LOAD";


const load = (songs, userId) => ({
  type: LOAD,
  payload: songs,
  userId
});

export const getSongs = () => async (dispatch) => {
  const response = await csrfFetch("/api/songs");
  const songs = await response.json();
  dispatch(load(songs));
  return response;
};

export const artistsSongs = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/songs`);
  if (response.ok) {
    const songs = await response.json();
    dispatch(load(songs, id));
  }
};

const initialState = { songs: null };


const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSongs = {};
      const songs = Object.values(action.payload);
      songs.forEach((song) => {
        allSongs[song.id] = song;
      });
      return {
        ...state,
        songs: { ...allSongs },
      };
    }
    default:
      return state;
  }
};

export default songReducer;