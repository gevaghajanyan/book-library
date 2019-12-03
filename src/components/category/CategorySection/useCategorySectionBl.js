import { useState, useEffect } from 'react';

import { FetchData } from '../../../core/classes/FetchData';
import categoryService from '../../../services/CategoryService';

export const useCategorySectionBl = props => {
  const [categories, setCategories] = useState(new FetchData([]));

  useEffect(() => {
    categoryService.getTopCategory().then(res => {
      setCategories(categories.fetched(res));
    });
  }, []);
  return {
    categories,
    ...props
  }
};