import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';
import { CartProvider } from './hooks/useCart';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }
`;

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyle />
        <AppRouter />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
