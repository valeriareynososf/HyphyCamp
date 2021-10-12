import { csrfFetch } from "./csrf";

const ADD_ONE = "single/ADD_ONE";

const oneUser = (user) => ({
  type: ADD_ONE,
  payload: user,
});


//Thunk action for GET single users
export const singleUser = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}`);
  if (response.ok) {
    const user = await response.json();
    dispatch(oneUser(user))
  }
};

const initialState = {
    main: {}
};


const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE: 
        return {...state, main:action.payload};
    default:
      return state;
  }
};

export default singleReducer;
