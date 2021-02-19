import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from "lodash";

import apiData from '../data/contriesData';

///const url = `/${region}?fields=name;flag;capital;population;area;demonym;numericCode`;

const fetchData = createAsyncThunk(
  'data/fetchData',
  async (region) => {
    const url = `/${region}?fields=name;flag;capital;population;area;callingCodes;latlng;demonym;numericCode`;
    const response = await apiData.get(url);

    const payload = response.data.reduce((accu, country) =>
      ({ ...accu, [country.name]: { ...country, checked: false } }), {});
    return payload;
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: {},
  reducers: {
    toogleCheckedCountry: (state, action) => {
      const countryCheckedToogle = { ...action.payload }    
      const { name, checked } = countryCheckedToogle;
      countryCheckedToogle.checked = !checked;
      return { ...state, [name]: countryCheckedToogle }
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      return { ...action.payload, ...state }
    },
  }
});

//export fetchData; 
export const { toogleCheckedCountry } = dataSlice.actions;
export { fetchData }
export default dataSlice;
