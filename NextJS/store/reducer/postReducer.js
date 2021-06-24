import * as types from "../types";

const initalState = {
  post: [],
  post: {},
  loading: false,
  error: null,
};
export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_POST:
      console.log("===", action.payload);
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
