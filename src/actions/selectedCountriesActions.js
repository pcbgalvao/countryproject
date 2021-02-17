import * as ACTION from '../constants';

export const selectCountry = country => {
    return {
      type: ACTION.SELECT_COUNTRY,
      payload: country
    }
  }
  
  export const unSelectCountry = (name) => {
    return {
      type: ACTION.UNSELECT_COUNTRY,
      payload: name
    }
  }