// src/reducers/dataReducer.js

const initialState = {
  data: [],
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
          return {
              ...state,
              data: action.payload,
              loading: false,
              error: null
          };
      case 'FETCH_DATA_FAILURE':
          return {
              ...state,
              loading: false,
              error: action.error
          };
      default:
          return state;
  }
};

export default dataReducer;
