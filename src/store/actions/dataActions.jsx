const api = process.env.REACT_APP_API_URL;

export const fetchData = () => (dispatch) => {
  return fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
    });
};
