// src/actions/dataActions.js

let api = 'https://basic-express-server-smiv.onrender.com/';


export const fetchData = () => dispatch => {
    return fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        })
        .catch(error => {
            dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
        });
};
