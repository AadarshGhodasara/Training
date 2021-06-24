import * as types from "../types";

export const fetchPost = () => async (dispatch) => {
  console.log("==><>");
  dispatch({
    type: types.GET_POST,
    payload: ["Next JS", "React JS", "Vue JS"],
  });
};
