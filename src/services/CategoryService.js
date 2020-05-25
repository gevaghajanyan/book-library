import { topCategories } from '../server/mockData/topCategories';
import { getBooksUrl } from '../core/helpers/endpointUrl';
import { getCategoryImage } from '../core/helpers/imageHelper';

export class CategoryService {
  getTopCategory = filter => {
    return fetch(getBooksUrl(), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.json())
      .then(({ data: { data } }) => {
        return Object.values(data.reduce((
          acc,
          elem,
        ) => {
          const { categories: [category] } = elem;
          const { _id, name } = category;
          if (acc[_id]) {
            acc[_id].books.push(elem);
          } else {
            acc[_id] = {
              category,
              books: [elem],
              rate: elem.rate,
              image: getCategoryImage(name),
            };
          }
          return acc;
        }, {}));
      }).catch(error => console.error(error));
  };
}

const categoryService = new CategoryService();
export default categoryService;
