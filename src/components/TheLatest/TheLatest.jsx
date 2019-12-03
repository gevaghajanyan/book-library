import React, { memo } from 'react';

import { useTheLatestBl } from './useTheLatestBl';

import Book from '../book/Book/Book';

import './theLatest.scss';

const TheLatest = memo(({ ...props }) => {
  const bl = useTheLatestBl(props);
  const { books } = bl;
  return (
    <section className='the-latest-section'>
      <header className='the-latest-header'>
        <h2>The Latest</h2>
      </header>
      <section className='the-latest-books'>
        {
          books.data.map(book => {
            return <Book book={book} key={book.id}/>
          })
        }
      </section>
    </section>
  )
});

TheLatest.propTypes = {};

export default TheLatest