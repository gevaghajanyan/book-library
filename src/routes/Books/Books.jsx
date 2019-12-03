import React, { memo } from 'react';
import BookCard from '../../components/book/BookCard/BookCard';
import { useBooksBl } from './useBooksBl';
import './books.scss';

const Books = memo(({ ...props }) => {
  const {
    bookList
  } = useBooksBl(props);

  return (
    <section className='book-list-view'>
      {bookList.data.map(book => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </section>
  )
});

Books.propTypes = {};

export default Books;