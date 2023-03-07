import React, { useState } from 'react';
import styled from 'styled-components';

// styled component에서 쓰기 위한 interface
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

// props interface
interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // optional
  text?: string; // optional
}

const Circle = ({ bgColor, borderColor, text = 'im here' }: CircleProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
      {value}
    </Container>
  );
};

export default Circle;
