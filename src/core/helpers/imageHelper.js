import js_wallpaper from '../../assets/images/categories/js_wallpaper.jpg';
import react_background from '../../assets/images/categories/react_background.jpg';
import nodejs_background from '../../assets/images/categories/nodejs_background.png';

const image = {
  JAVA_SCRIPT: js_wallpaper,
  NODEJS: nodejs_background,
  REACTJS: react_background,
};

export const getCategoryImage = (name) => {
  name = name.toUpperCase().replace(/\s/g, '_');
  return image[name];
};
