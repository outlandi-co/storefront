// categories.actions.js
import axios from 'axios';

export const fetchCategoriesRequest = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
});

export const fetchCategoriesSuccess = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: categories
});

export const fetchCategoriesFailure = (error) => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  payload: error
});

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios.get('/api/categories')
      .then(response => {
        const categories = response.data;
        dispatch(fetchCategoriesSuccess(categories));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchCategoriesFailure(errorMessage));
      });
  };
};

export const setActiveCategory = (category) => ({
  type: 'SET_ACTIVE_CATEGORY',
  payload: category
});
