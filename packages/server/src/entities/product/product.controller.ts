import type { Request, Response } from 'express';
import FileRepository from '../../repositories/files.repository';
import escapeSpecialCharacters from '../../utils/regex/escapeSpecialCharacters';
import normalizeTextAccents from '../../utils/string/normalizeTextAccents';

type Product = {
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

export default {
  index: async (_: Request, res: Response) => {
    try {
      const productsRepository = new FileRepository('products');

      res.send({ data: await productsRepository.get() });
    } catch (err) {
      res.status(500).send({
        data: {
          message: 'Error on reading locale list',
          stacktrace: err
        }
      });
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const productsRepository = new FileRepository('products');

      const products = await productsRepository.get<Product[]>();

      const foundProducts = products.find(
        locale => `${locale.id}` === req.params.id
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
          message: 'Error on reading locale list',
          stacktrace: err
        }
      });
    }
  },
  search: async (req: Request, res: Response) => {
    try {
      if (!req.query.q)
        throw new Error('Missing search query in request params');

      const productsRepository = new FileRepository('products');

      const locales = await productsRepository.get<Product[]>();

      const querySearch = normalizeTextAccents(
        escapeSpecialCharacters(req.query.q)
      );

      const foundLocales = locales.filter(({ title }) =>
        normalizeTextAccents(title).match(new RegExp(querySearch, 'gi'))
      );

      if (foundLocales) {
        res.send({
          data: {
            results: foundLocales,
            totalCount: foundLocales.length
          }
        });
        return;
      }

      res.status(404).send({ data: [] });
    } catch (err) {
      res.status(500).send({
        data: {
          message: `${err}`
        }
      });
    }
  }
};
