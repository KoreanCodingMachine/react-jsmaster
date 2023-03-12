import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <Router />
      </HelmetProvider>
    </>
  );
};

export default App;
