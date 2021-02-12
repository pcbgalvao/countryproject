import { combineReducers } from "redux";
import dataReducers from "./dataReducers";
import selectedCountryReducers from "./selectedCountryReducers";

export default combineReducers({
  dataCountries: dataReducers,  
  selectedCountry: selectedCountryReducers
});
