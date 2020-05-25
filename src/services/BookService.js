import { mostPopularBooks } from '../server/mockData/mostPopularBooks';
import { theLatestBooks } from '../server/mockData/theLatestBooks';
import allBooks from '../server/mockData/books.json';
import { getBooksUrl, getBookUrl, getLastBooksUrl, getTopBooksUrl } from '../core/helpers/endpointUrl';

class BookService {
  getMostPopularBooks = filter => {
    return fetch(getTopBooksUrl(), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  };

  getTheLatestBooks = filter => {
    return fetch(getLastBooksUrl(filter), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  };

  getBookById = id => {
    return fetch(getBookUrl(id), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  };

  getAllBooks = () => {
    return fetch(getBooksUrl(), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.json())
      .then(({ data: { data } }) => data)
      .catch(error => console.error(error));
  };
}

const bookService = new BookService();
export default bookService;
