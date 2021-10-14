import { csrfFetch } from "./csrf";

const LOAD = "users/LOAD";
 const ADD_ONE = "users/ADD_ONE";

const load = (users, id) => ({
  type: LOAD,
  payload: users,
  id
});

const oneUser = (users) => ({
  type: ADD_ONE,
  payload: users,
});

//Thunk action for GET users
export const getUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/users");
  const users = await response.json();
  dispatch(load(users));
  return response;
};

//Thunk action for GET single users
export const singleUser = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}`);
  if (response.ok) {
  const users = await response.json();
  dispatch(oneUser(users));
  return response;
  }
};

const initialState = {artists: null};
// const sortList = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allUsers = {};
      const users = Object.values(action.payload);
      users.forEach((user) => {
        allUsers[user.id] = user;
      });
      return {
        ...state,
        artists: { ...allUsers },
      };
    }
    default:
      return state;
  }
};

export default userReducer;