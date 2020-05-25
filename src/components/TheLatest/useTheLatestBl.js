import { useEffect, useState } from 'react';
import { FetchData } from '../../core/classes/FetchData';
import bookService from '../../services/BookService';

export const useTheLatestBl = props => {
  const [books, setBooks] = useState(new FetchData([]));

  useEffect(() => {
    bookService.getTheLatestBooks({
      page: 0,
      count: 6,
    }).then(res => {
      setBooks(books.fetched(res));
    })
  }, []);

  return {
    books,
    ...props,
  }
};
