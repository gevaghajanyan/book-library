import { mostPopularBooks } from './mostPopularBooks';
import js_wallpaper from '../../assets/images/categories/js_wallpaper.jpg'
import react_background from '../../assets/images/categories/react_background.jpg'

export const topCategories = [
  {
    id: 1,
    imageUrl: js_wallpaper,
    title: 'Java Script',
    booksCount: 123,
    rate: 100,
    topBooks: [
      ...mostPopularBooks.slice(0, 2)
    ]
  },
  {
    id: 2,
    imageUrl: react_background,
    title: 'React Js',
    booksCount: 123,
    rate: 100,
    topBooks: [
      ...mostPopularBooks.slice(2, 4)
    ]
  },
  {
    id: 3,
    imageUrl: js_wallpaper,
    title: 'Java Script',
    booksCount: 123,
    rate: 100,
    topBooks: [
      ...mostPopularBooks.slice(1, 3)
    ]
  }
];