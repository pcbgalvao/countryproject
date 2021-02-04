import * as ACTION from '../actions/types';

const selectedCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION.SELECTED_COUNTRY:
      return action.payload;
    case ACTION.CHECK_COUNTRY: {
      if (action.payload.name===state.name) {
        return {}
      }
      return state;
    }
      
    default:
      return state;
  }
}

export default selectedCountryReducer;