// src/Components/Categories/index.jsx
import React from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/actions/categoryActions';

const Categories = ({ categories, setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories
});

export default connect(mapStateToProps, { setActiveCategory })(Categories);
