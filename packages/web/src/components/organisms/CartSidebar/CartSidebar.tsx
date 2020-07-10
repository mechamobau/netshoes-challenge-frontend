import React from 'react';

import styled from 'styled-components';
import useCart from '../../../hooks/useCart';
import Button from '../../atoms/Button/Button';
import BagIcon from '../../atoms/BagIcon/BagIcon';
import PriceText from '../../atoms/PriceText/PriceText';
import ProductListItem from '../../molecules/ProductListItem/ProductListItem';
import { baseURL } from '../../../services/api';
import TimesIcon from '../../atoms/TimesIcon/TimesIcon';

type Props = {
  open: boolean;
};

const Container = styled.aside<Pick<Props, 'open'>>`
  outline: 0;
  width: 100%;
  max-width: 500px;
  background-color: #202025;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  padding: 15px 0;
  max-height: 100%;
  overflow-y: auto;
  transform: ${({ open }) => (open ? `translateX(0)` : `translateX(100%)`)};
  transition: 500ms all ease-in-out;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const HeaderTitle = styled.h2`
  font-size: 1.2rem;
  color: #ffffff;
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

const CartSidebar = ({ open }: Props) => {
  const { cartProducts, totalPrice, setCartOpened } = useCart();

  return (
    <Container open={open}>
      <CloseButton onClick={() => setCartOpened(false)}>
        <TimesIcon />
      </CloseButton>
      <HeaderContainer>
        <BagContainer>
          <BagIcon width="30px" height="30px" />
          <BagCounter>{cartProducts.length}</BagCounter>
        </BagContainer>
        <HeaderTitle>Sacola</HeaderTitle>
      </HeaderContainer>
      <ProductionListContainer>
        {cartProducts.map(({ image, ...product }) => (
          <ProductListItem
            product={{ image: `${baseURL}${image}`, ...product }}
          />
        ))}
      </ProductionListContainer>
      <ButtonContainer>
        <SummaryContainer>
          <Title>Subtotal</Title>
          <SummaryPriceContainer>
            <PriceText currencyFormat="R$" price={totalPrice} />
            {totalPrice > 0 && (
              <Title>ou em até 10 X R$ {(totalPrice / 10).toFixed(2)}</Title>
            )}
          </SummaryPriceContainer>
        </SummaryContainer>
        <Button onClick={() => {}}>comprar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CartSidebar;
