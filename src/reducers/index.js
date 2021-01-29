import { combineReducers } from "redux";

const defaultReducer = (state = [], action) => {
  return null;
};

export default combineReducers({
  defaultReducer: defaultReducer,
});

// export default reducersCombined;
