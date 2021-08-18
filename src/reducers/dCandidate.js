import { ACTION_TYPES } from "../actions/dCandidate";
const initialState = {
  list: [],
};
var i = 9;
export const dCandidate = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
