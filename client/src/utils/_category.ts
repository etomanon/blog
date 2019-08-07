import ky from '../ky/ky';

export const categoriesLoad = () =>
  ky.get('categories').json<string[]>();
