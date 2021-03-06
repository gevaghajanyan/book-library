import React, { memo } from 'react';

import { useMostPopularBl } from './useMostPopularBl';

import './mostPopular.scss';
import BookCard from '../book/BookCard/BookCard';

const MostPopular = memo(({ ...props }) => {
  const { mostPopularBooks } = useMostPopularBl(props);
  return (
    <section className='most-popular'>
      <header className='most-popular-header'>
        <h2>Most Popular</h2>
      </header>
      <div className='most-popular-books'>
        {
          mostPopularBooks.data.map(book => {
            return <BookCard
              book={book}
              key={book._id}
            />;
          })
        }
      </div>
    </section>
  );
});

MostPopular.propTypes = {};

export default MostPopular;
