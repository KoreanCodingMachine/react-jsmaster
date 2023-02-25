import React, { useState } from 'react';
import styled from 'styled-components';

// components의 props
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// styled components의 props
interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // optional
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = 'default text',
}: CircleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.age}`;

sayHello({ name: 'nico', age: 12 });
