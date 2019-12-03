import { useEffect, useState } from 'react'
import { FetchData } from '../../core/classes/FetchData';
import bookService from '../../services/BookService';

export const useBooksBl = props => {
  const [bookList, setBookList] = useState(new FetchData([]));

  useEffect(() => {
    bookService.getAllBooks().then(res => setBookList(bookList.fetched(res)));
  }, []);

  return {
    bookList,
    ...props,
  }
};