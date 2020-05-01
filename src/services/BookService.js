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
    return fetch(`http://localhost:4321/api/books/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  };

  getAllBooks = () => {
    return fetch('http://localhost:4321/api/books', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  }
}

const bookService = new BookService();
export default bookService;