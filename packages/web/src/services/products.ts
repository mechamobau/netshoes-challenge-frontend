import api from './api';

export type Product = {
  id: number;
  sku: number;
  title: string;
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
  getAll: () => Promise<ProductsList>;
  getOne: (id: number) => Promise<Product>;
  search: (query: string) => Promise<ProductsList>;
}

class ProductService implements IProducts {
  getAll = async () => {
    const { data } = await api.get<ProductsList>('/product');
    return data;
  };
  getOne = async (id: number) => {
    const { data } = await api.get<Product>(`/product/${id}`);
    return data;
  };
  search = async (query: string) => {
    const { data } = await api.get<ProductsList>(`/product`, {
      params: {
        q: query
      }
    });

    return data;
  };
}

export default ProductService;
