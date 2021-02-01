import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import regionReducer from "./regionReducer";

export default combineReducers({
  dataCountriesRegion: dataReducer,
  region: regionReducer,
});
