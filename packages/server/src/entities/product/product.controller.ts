import type { Request, Response } from 'express';
import FileRepository from '../../repositories/files.repository';
import escapeSpecialCharacters from '../../utils/regex/escapeSpecialCharacters';
import normalizeTextAccents from '../../utils/string/normalizeTextAccents';

type Product = {
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

type ProductsList = {
  products: Product[];
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      const productsRepository = new FileRepository('products');

      const { products } = await productsRepository.get<ProductsList>();

      res.send({
        data: {
          products,
          count: products.length
        }
      });
    } catch (err) {
      res.status(500).send({
        data: {
          message: 'Error on reading product list',
          stacktrace: err
        }
      });
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const productsRepository = new FileRepository('products');

      const { products } = await productsRepository.get<ProductsList>();

      const foundProducts = products.find(
        product => `${product.id}` === req.params.id
      );

      if (foundProducts) {
        res.send({
          data: foundProducts
        });
        return;
      }

      res.status(404).send({ data: [] });
    } catch (err) {
      res.status(500).send({
        data: {
          message: 'Error on reading product list',
          stacktrace: err
        }
      });
    }
  }
};
