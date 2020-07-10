import React, { useEffect, useState } from 'react';
import PublicLayout from '../../components/templates/PublicLayout/PublicLayout';
import ProductItem from '../../components/molecules/ProductItem/ProductItem';

import styled from 'styled-components';
import ProductService, { Product } from '../../services/products';
import api, { baseURL } from '../../services/api';
import useCart from '../../hooks/useCart';

const Grid = styled.div`
  width: 100%;
  display: block;

  @media (min-width: 768px) {
    width: 25%;
    display: inline-block;
  }
`;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addProductToCart } = useCart();

  useEffect(() => {
    const productService = new ProductService();

    productService.getAll().then(({ data: { products } }) => {
      if (products) setProducts(products);
    });
  }, []);

  return (
    <PublicLayout>
      {products?.map(product => {
        return (
          <Grid>
            <ProductItem
              key={product.id}
              {...product}
              image={`${baseURL}${product.image}`}
              onClick={() => {
                console.log('click');
                addProductToCart(product);
              }}
            />
          </Grid>
        );
      })}
    </PublicLayout>
  );
};

export default Home;
