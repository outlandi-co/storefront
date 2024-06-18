import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../store/Categories/index';

const Categories = () => {
  const categories = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.name} onClick={() => dispatch(setActiveCategory(category.name))}>
            {category.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
