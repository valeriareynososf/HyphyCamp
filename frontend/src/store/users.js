import { csrfFetch } from "./csrf";

const LOAD = "users/LOAD";

const load = () => ({
  type: LOAD,
});

//Thunk action for GET users
export const getUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/users");
  const user = await response.json();
  dispatch(load(user));
  return response;
};

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
        const allUsers = {};
        action.state.forEach(user => {
        allUsers[user.id] = user;
        });
        return {
            ...allUsers,
            ...state,
            state: (action.state)
        }
    }
    default:
      return state;
  }
};

export default userReducer;