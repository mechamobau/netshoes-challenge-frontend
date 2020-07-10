import React, { ReactText } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  border-radius: 3px;
  cursor: pointer;
  border: 0 none transparent;
  color: #fff;
  background-color: #000000;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 21px 0;
  width: 100%;
  text-align: center;
`;

type Props = {
  onClick: () => void;
  children: ReactText;
};

const Button = ({ onClick, children }: Props) => (
  <Container onClick={onClick}>{children}</Container>
);

export default Button;
