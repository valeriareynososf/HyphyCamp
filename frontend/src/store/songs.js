import { csrfFetch } from "./csrf";

const LOAD = "songs/LOAD";
const ADD_SONG = "songs/add_song";

const load = (songs, userId) => ({
  type: LOAD,
  payload: songs,
  userId
});

const add_song = (song, userId) => ({
  type: ADD_SONG,
  payload: song,
  userId,
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

export const addSong = (song, id) => async (dispatch) => {
  const { name, imgUrl, url } = song;
  const response = await csrfFetch(`/api/users/${id}/songs`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imgUrl,
      url,
    }),
  });
  const data = await response.json();
  dispatch(add_song(data.song));
  return response;
};

const initialState = { songs: null };


const songReducer = (state = initialState, action) => {
  let newState;
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
    case ADD_SONG:
      newState = Object.assign({}, state);
      newState.song = action.payload;
      return newState;
    default:
      return state;
  }
};

export default songReducer;