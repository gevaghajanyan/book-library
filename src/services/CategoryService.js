import { topCategories } from '../server/mockData/topCategories';

export class CategoryService {
  getTopCategory = filter => {
    return Promise.resolve(topCategories)
  }
}

const categoryService = new CategoryService();
export default categoryService;
