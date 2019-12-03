import { mostPopularBooks } from '../server/mockData/mostPopularBooks';
import { theLatestBooks } from '../server/mockData/theLatestBooks';
import allBooks from '../server/mockData/books.json'

class BookService {
  getMostPopularBooks = filter => {
    return Promise.resolve(mostPopularBooks);
  };

  getTheLatestBooks = filter => {
    return Promise.resolve(theLatestBooks);
  };

  getBookById = id => {
    const book = allBooks.find(book => book.id == id);
    return Promise.resolve(book);
  };

  getAllBooks = () => {
    return Promise.resolve(Array.from(allBooks))
  }
}

const bookService = new BookService();
export default bookService;