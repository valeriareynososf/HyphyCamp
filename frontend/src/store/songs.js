import { csrfFetch } from "./csrf";

const LOAD = "songs/LOAD";
const ADD_SONG = "songs/add_song";
const ONE_SONG = "songs/single_song";

const load = (songs, userId) => ({
  type: LOAD,
  payload: songs,
  userId
});

const add_song = (song) => ({
  type: ADD_SONG,
  payload: song,
});

const single_song = (song) => ({
  type: ONE_SONG,
  payload: song,
});

export const getSongs = () => async (dispatch) => {
  const response = await csrfFetch("/api/songs");
  const songs = await response.json();
  dispatch(load(songs));
  return response;
};

export const singleSong = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${id}`);
  const songs = await response.json();
  dispatch(single_song(songs));
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
  console.log(data)
  dispatch(add_song(data));
  return response;
};

//edit a song
export const editSong = (song, id) => async (dispatch) => {
  const { name, imgUrl, url } = song;
  const response = await csrfFetch(`/api/songs/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      imgUrl,
      url,
    }),
  });
  if (response.ok) {
  const data = await response.json();
  dispatch(add_song(data));
  return data;
  }
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
    case ONE_SONG: {
return { ...state, main: action.payload };
    }
    case ADD_SONG:
      newState = Object.assign({}, state);
      newState.songs = { ...newState.songs,
                         [action.payload.id]: action.payload
                        }
      return newState;
    default:
      return state;
  }
};

export default songReducer;