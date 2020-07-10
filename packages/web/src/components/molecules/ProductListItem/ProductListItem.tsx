import React, { useState } from 'react';

import styled from 'styled-components';
import PriceText from '../../atoms/PriceText/PriceText';
import TimesIcon from '../../atoms/TimesIcon/TimesIcon';

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

const ProductListItem = () => {
  const [removeButtonHovered, setRemoveButtonHovered] = useState(false);
  const [productHovered, setProductHovered] = useState(false);

  const setTrue = (callback: (value: boolean) => void) => () => {
    callback(true);
  };

  const setFalse = (callback: (value: boolean) => void) => () => {
    callback(false);
  };

  return (
    <Container
      onMouseEnter={setTrue(setProductHovered)}
      onMouseLeave={setFalse(setProductHovered)}
    >
      <Image
        isStrikethrough={removeButtonHovered}
        src="https://static.netshoes.com.br/produtos/camiseta-gonew-basica-fast-masculina/06/C62-2715-006/C62-2715-006_zoom2.jpg?ts=1593537805&ims=326x"
      />
      <InfoContainer isStrikethrough={removeButtonHovered}>
        <InfoTitle>Camiseta Corinthians College 77</InfoTitle>
        <InfoSubtitle>GGG | Preto e branco</InfoSubtitle>
        <InfoSubtitle>Quantidade: 1</InfoSubtitle>
      </InfoContainer>
      <ControlContainer>
        <RemoveButton
          onMouseEnter={setTrue(setRemoveButtonHovered)}
          onMouseLeave={setFalse(setRemoveButtonHovered)}
        >
          <TimesIcon fill={productHovered ? '#fff' : '#000'} />
        </RemoveButton>
        <Price currencyFormat="R$" price={12.21} />
      </ControlContainer>
    </Container>
  );
};

export default ProductListItem;
