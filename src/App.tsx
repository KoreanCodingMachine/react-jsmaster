import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
