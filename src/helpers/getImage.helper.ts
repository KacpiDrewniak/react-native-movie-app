import {IMAGE_API_URL} from '../config/config.ts';

export const getImageHelper = (url: string) => {
  return `${IMAGE_API_URL}${url}`;
};
