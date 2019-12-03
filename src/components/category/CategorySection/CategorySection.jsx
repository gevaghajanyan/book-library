import React, { memo } from 'react';

import { useCategorySectionBl } from './useCategorySectionBl';
import CategoryCard from '../CategoryCard/CategoryCard';

import './categorySection.scss';

const CategorySection = memo(({ ...props }) => {
  const { categories } = useCategorySectionBl(props);
  return (
    <section className='categories-section'>
      <header>
        <h2>Categories</h2>
      </header>
      <div className='categories-list'>
        {categories.data.map(category => {
          return <CategoryCard card={category} key={category.id}/>
        })}
      </div>
    </section>
  )
});

CategorySection.propTypes = {};

export default CategorySection