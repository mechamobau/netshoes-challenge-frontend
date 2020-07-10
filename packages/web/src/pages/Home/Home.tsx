import React from 'react';
import PublicLayout from '../../components/templates/PublicLayout/PublicLayout';
import ProductItem from '../../components/molecules/ProductItem/ProductItem';

import styled from 'styled-components';

const Grid = styled.div`
  width: 25%;
  display: inline-block;
`;

const Home = () => {
  return (
    <PublicLayout>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
      <Grid>
        <ProductItem
          title="Camisa Nike Corinthians I"
          currencyFormat="R$"
          price={229.9}
        />
      </Grid>
    </PublicLayout>
  );
};

export default Home;
