import apiData from "./../data/contriesData";

export const fetchData = () => async (dispatch, getState) => {
  await dispatch(fetchInfo());
};

export const fetchInfo = (region) => async dispatch => {
  const response = await apiData.get(`/regions${region}?fields=name;flag;capital;population;area`);

  dispatch({ type: 'FETCH_DATA', payload: response.data });
};
