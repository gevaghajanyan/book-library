import { useState, useEffect } from 'react';

import { FetchData } from '../../core/classes/FetchData';
import bookService from '../../services/BookService';

export const useMostPopularBl = props => {

  const [mostPopularBooks, setMostPopularBooks] = useState(new FetchData([]));

  useEffect(() => {
    mostPopularBooks.fetching();
    bookService.getMostPopularBooks().then(result => {
      setMostPopularBooks(mostPopularBooks.fetched(result));
    })
  }, []);

  return {
    mostPopularBooks,
    ...props
  }
};