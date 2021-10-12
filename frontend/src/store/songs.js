import { csrfFetch } from "./csrf";

const LOAD = "songs/LOAD";


const load = (songs) => ({
  type: LOAD,
  payload: songs,
});

export const getSongs = () => async (dispatch) => {
  const response = await csrfFetch("/api/songs");
  const songs = await response.json();
  dispatch(load(songs));
  return response;
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