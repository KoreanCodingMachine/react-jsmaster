import styled, { keyframes } from 'styled-components';
import Circle from './Circle';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  otherThingsHere?: boolean;
}

function Dummy({ text, otherThingsHere = false }: DummyProps) {
  return <h1>{text}</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
