import React, { useState, useCallback } from 'react';

import styled from 'styled-components';
import PriceText from '../../atoms/PriceText/PriceText';
import TimesIcon from '../../atoms/TimesIcon/TimesIcon';

import useCart, { ProductCart } from '../../../hooks/useCart';

const Container = styled.div`
  display: flex;
  padding: 25px 15px;
  border-top: 1px solid #131316;
  border-bottom: 1px solid #131316;
  margin-top: -1px;

  &:hover {
    background-color: #131316;
  }
`;

const Image = styled.img<{ isStrikethrough: boolean }>`
  opacity: ${({ isStrikethrough }) => (isStrikethrough ? 0.3 : 1)};
  height: 50px;
  width: 50px;
  margin-right: 15px;
  object-fit: cover;
`;

const InfoContainer = styled.div<{ isStrikethrough: boolean }>`
  opacity: ${({ isStrikethrough }) => (isStrikethrough ? 0.3 : 1)};
  text-decoration: ${({ isStrikethrough }) =>
    isStrikethrough ? 'line-through' : 'normal'};
`;

const InfoTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
`;

const InfoSubtitle = styled.h4`
  color: #999999;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ControlContainer = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
  margin-left: auto;
  font-size: 0.3rem;
  padding-left: 15px;
`;

const Price = styled(PriceText)`
  font-size: 0.875rem;
`;

const RemoveButton = styled.button`
  cursor: pointer;
  border: 0 none transparent;
  background-color: transparent;
  text-align: right;
  margin-left: auto;
  display: block;
  margin-bottom: 0.875rem;
`;

type Props = {
  product: ProductCart;
};

const ProductListItem = ({ product }: Props) => {
  const [removeButtonHovered, setRemoveButtonHovered] = useState(false);
  const [productHovered, setProductHovered] = useState(false);
  const { removeProductFromCart } = useCart();

  const setTrue = useCallback(
    (callback: (value: boolean) => void) => () => {
      callback(true);
    },
    []
  );

  const setFalse = useCallback(
    (callback: (value: boolean) => void) => () => {
      callback(false);
    },
    []
  );

  return (
    <Container
      onMouseEnter={setTrue(setProductHovered)}
      onMouseLeave={setFalse(setProductHovered)}
    >
      <Image isStrikethrough={removeButtonHovered} src={product.image} />
      <InfoContainer isStrikethrough={removeButtonHovered}>
        <InfoTitle>{product.title}</InfoTitle>
        <InfoSubtitle>
          {product.availableSizes[0]}&nbsp;
          {product.description && `| ${product.description}`}
        </InfoSubtitle>
        <InfoSubtitle>Quantidade: {product.count}</InfoSubtitle>
      </InfoContainer>
      <ControlContainer>
        <RemoveButton
          onClick={() => removeProductFromCart(product.id)}
          onMouseEnter={setTrue(setRemoveButtonHovered)}
          onMouseLeave={setFalse(setRemoveButtonHovered)}
        >
          <TimesIcon fill={productHovered ? '#fff' : '#000'} />
        </RemoveButton>
        <Price currencyFormat={product.currencyFormat} price={product.price} />
      </ControlContainer>
    </Container>
  );
};

export default ProductListItem;
