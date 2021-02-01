import * as ACTION from "../actions/types";

const regionReducer = (state = "", action) => {
  switch (action.type) {
    case ACTION.SELECTED_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default regionReducer;
