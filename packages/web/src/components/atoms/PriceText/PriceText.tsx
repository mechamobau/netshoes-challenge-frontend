import React, { useMemo } from 'react';

import styled from 'styled-components';
import { Product } from '../../../services/products';

const Price = styled.h3`
  font-size: 1.5rem;
  color: #dfbd00;
  font-weight: 500;
  text-align: right;
`;

const Bold = styled.span`
  font-weight: 700;
`;

type Props = Pick<Product, 'currencyFormat' | 'price'> & {
  className?: string;
};

const PriceText = ({ currencyFormat, price: rawPrice, className }: Props) => {
  const price = useMemo(() => {
    const _price = `${rawPrice.toFixed(2)}`.split('.');

    return {
      integer: _price[0],
      decimal: _price[1]
    };
  }, [rawPrice]);

  return (
    <Price className={className}>
      {currencyFormat}&nbsp;
      <Bold>{price.integer}</Bold>,{price.decimal}
    </Price>
  );
};

export default PriceText;
