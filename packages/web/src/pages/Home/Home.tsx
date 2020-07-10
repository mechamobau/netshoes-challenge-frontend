import React, { useEffect, useState } from 'react';
import PublicLayout from '../../components/templates/PublicLayout/PublicLayout';
import ProductItem from '../../components/molecules/ProductItem/ProductItem';

import styled from 'styled-components';
import ProductService, { Product } from '../../services/products';
import api, { baseURL } from '../../services/api';
import useCart from '../../hooks/useCart';
import BagIcon from '../../components/atoms/BagIcon/BagIcon';

const Grid = styled.div`
  width: 100%;
  display: block;

  @media (min-width: 768px) {
    width: 25%;
    display: inline-block;
  }
`;

const HeaderContainer = styled.header`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-right: 40px;
`;

const HeaderTitle = styled.h2`
  font-size: 1.2rem;
  color: #000;
  text-transform: uppercase;

  margin-left: 10px;
`;

const BagContainer = styled.div`
  position: relative;
`;

const BagCounter = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  vertical-align: middle;
  display: inline-table;
  color: #000;
  background-color: #dfbd00;
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding: 0 15px;
`;

const ProductionListContainer = styled.div``;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 0 33px;
`;

const Title = styled.h2`
  color: #919193;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const SummaryPriceContainer = styled.div`
  & > ${Title} {
    font-size: 0.75rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  border: 0 none transparent;
  background-color: transparent;
  text-align: right;
  margin-left: auto;
  display: block;
  margin-bottom: 0.875rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const CartButton = styled.button`
  cursor: pointer;
  border: 0 none transparent;
  background-color: transparent;
  text-align: right;
  margin-left: auto;
  display: block;
  margin-bottom: 0.875rem;
`;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { setCartOpened, cartProducts } = useCart();

  useEffect(() => {
    const productService = new ProductService();

    productService.getAll().then(({ data: { products } }) => {
      if (products) setProducts(() => [...products]);
    });
  }, []);

  return (
    <PublicLayout>
      <Header>
        <HeaderContainer onClick={() => setCartOpened(true)}>
          <BagContainer>
            <BagIcon width="30px" height="30px" fill="#000" />
            <BagCounter>{cartProducts.length}</BagCounter>
          </BagContainer>
          <HeaderTitle>Sacola</HeaderTitle>
        </HeaderContainer>
      </Header>
      {products?.map(product => {
        return (
          <Grid key={product.id}>
            <ProductItem product={product} />
          </Grid>
        );
      })}
    </PublicLayout>
  );
};

export default Home;
