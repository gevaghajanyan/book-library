import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './categoryCard.scss';
import Book from '../../book/Book/Book';
import RateStars from '../../RateStars/RateStars';

const CategoryCard = memo(({
  card: {
    rate,
    image,
    category: {
      name,
    },
    books,
  },
}) => {
  return (
    <section className='category-card-section' style={{
      backgroundImage: `url(${image})`,
    }}>
      <header className='category-card-header'>
        <h3>{name}</h3>
      </header>
      <span>
        {books.length} books
      </span>
      <RateStars rate={rate}/>
      <section className='category-card-books'>
        {
          books.slice(0, 2).map(book => {
            return <Book book={book} showTitle={false} key={book.id}/>;
          })
        }
      </section>
    </section>
  );
});

CategoryCard.propTypes = {
  card: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
    books: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      authors: PropTypes.array,
      title: PropTypes.string,
      file: PropTypes.string,
      image: PropTypes.string,
      categories: PropTypes.array,
      rate: PropTypes.number,
      published: PropTypes.any,
    })),
  }),
};

export default CategoryCard;
