import { useState, useEffect } from 'react';

import { FetchData } from '../../../core/classes/FetchData';
import bookService from '../../../services/BookService';

export const useBookDetailsBl = ({ bookId, ...props }) => {
  const [book, setBook] = useState(new FetchData(null));

  useEffect(() => {
    bookService.getBookById(bookId).then(res => {
      setBook(book.fetched(res))
    })
  }, []);

  return {
    book,
    ...props
  }
};