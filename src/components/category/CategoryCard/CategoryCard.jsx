import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './categoryCard.scss';
import Book from '../../book/Book/Book';
import RateStars from '../../RateStars/RateStars';

const CategoryCard = memo(({
  card: {
    title,
    rate,
    booksCount,
    imageUrl,
    topBooks,
  },
}) => {
  return (
    <section className='category-card-section' style={{
      backgroundImage: `url(${imageUrl})`
    }}>
      <header className='category-card-header'>
        <h3>{title}</h3>
      </header>
      <span>
        {booksCount} books
      </span>
      <RateStars rate={rate}/>
      <section className='category-card-books'>
        {
          topBooks.map(book => {
            return <Book book={book} showTitle={false} key={book.id}/>
          })
        }
      </section>
    </section>
  )
});

CategoryCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    rate: PropTypes.number,
    booksCount: PropTypes.number,
    imageUrl: PropTypes.string,
    topBooks: PropTypes.arrayOf(PropTypes.shape({
      imageUrl: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
    }))
  })
};

export default CategoryCard