import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Product } from '../../../services/products';
import useCart from '../../../hooks/useCart';
import { baseURL } from '../../../services/api';

const Name = styled.h2`
  &:after {
    content: '';
    display: block;
    width: 14px;
    height: 2px;
    background-color: #dfbd00;
    margin: 7px auto;
  }
`;

const Price = styled.p``;

const UpperPrice = styled.span`
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 18px 36px;
  cursor: pointer;

  & > ${Name} {
    font-size: 0.875rem;
  }

  & ${UpperPrice} {
    font-size: 1.5rem;
  }

  & > ${Price} {
    font-size: 0.75rem;
    line-height: 1;
  }
`;

const Image = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  margin-bottom: 1rem;
`;

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { addProductToCart } = useCart();

  const price = useMemo(() => {
    const _price = `${product.price.toFixed(2)}`.split('.');

    return {
      integer: _price[0],
      decimal: _price[1]
    };
  }, [product]);

  const handleClick = useCallback(() => {
    addProductToCart(product);
  }, [addProductToCart, product]);

  return (
    <Container onClick={handleClick}>
      <Image src={`${baseURL}${product.image}`} />
      <Name>{product.title}</Name>
      <Price>
        {product.currencyFormat}&nbsp;
        <UpperPrice>{price.integer}</UpperPrice>,{price.decimal}
      </Price>
    </Container>
  );
};

export default ProductItem;
