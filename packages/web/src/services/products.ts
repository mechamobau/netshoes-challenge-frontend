import api from './api';

export type Product = {
  id: number;
  sku: number;
  title: string;
  image: string;
  description: string;
  availableSizes: string[];
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
};

export type ProductsList = {
  products: Product[];
  count: number;
};

interface IProducts {
  getAll: () => Promise<{ data: ProductsList }>;
  getOne: (id: number) => Promise<{ data: Product }>;
  search: (query: string) => Promise<{ data: ProductsList }>;
}

class ProductService implements IProducts {
  getAll = async () => {
    const { data } = await api.get<{ data: ProductsList }>('/product');
    return data;
  };
  getOne = async (id: number) => {
    const { data } = await api.get<{ data: Product }>(`/product/${id}`);
    return data;
  };
  search = async (query: string) => {
    const { data } = await api.get<{ data: ProductsList }>(`/product`, {
      params: {
        q: query
      }
    });

    return data;
  };
}

export default ProductService;
