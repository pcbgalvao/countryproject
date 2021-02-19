import { configureStore, combineReducers } from '@reduxjs/toolkit';

import selectedCountrySlice from './selectedCountrySlice';
import dataSlice from './dataSlice';

const rootReducer = combineReducers({
    data: dataSlice.reducer,
    selectedCountry: selectedCountrySlice.reducer
});

const appStore = configureStore({
  reducer: rootReducer  
});

export default appStore;