import { IProduct } from 'app/store';
import { http } from './base';

type Payload = {
  page: number;
};

type Response = {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
};

export const getProducts = async ({ page }: Payload) => {
  const skip = 10 * page;
  const response = await http.get(
    `https://dummyjson.com/products?limit=10&skip=${skip}`,
  );
  return response.data as Response;
};
