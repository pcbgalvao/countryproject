import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const selectedCountrySlice = createSlice({
  name: 'selectedCountry',
  initialState: {},
  reducers: {
    selectCountry: (state, action) => {
      return { ...state, ...action.payload }
    },
    unSelectCountry: (state, action) => {
      if (state.name === action.payload) {
        return {};
      } else {
        return _.omit(state, action.payload)
      }
    }
  }
});

export const { selectCountry, unSelectCountry } = selectedCountrySlice.actions;
export default selectedCountrySlice;