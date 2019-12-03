import books from './books.json';

export const theLatestBooks = [
  ...books.slice(96, 108)
];