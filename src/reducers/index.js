import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import regionReducer from "./regionReducer";
import selectedCountryReducer from "./selectedCountryReducer";

export default combineReducers({
  dataCountriesRegion: dataReducer,
  region: regionReducer,
  selectedCountry: selectedCountryReducer
});
