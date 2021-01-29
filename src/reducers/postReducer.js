export default (state = [], action) => {
    //console.log ("Hi, I'm a reducer-state", state)
    switch (action.type) {
      case 'FETCH_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  