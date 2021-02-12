import * as ACTION from '../constants';

const selectedCountryReducers = (state = {}, action) => {
  switch (action.type) {
    case ACTION.SELECT_COUNTRY:
      return action.payload;
    case ACTION.UNSELECT_COUNTRY: {      
      return {};
    }
      
    default:
      return state;
  }
}

export default selectedCountryReducers;