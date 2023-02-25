import styled, { keyframes } from 'styled-components';
import Circle from './Circle';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', value);
  };

  return (
    // <div>
    //   <Circle borderColor='white' bgColor='teal' />
    //   <Circle text='im here' bgColor='tomato' />
    // </div>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        type='text'
        placeholder='username'
      />
      <button>Log in</button>
    </form>
  );
}

export default App;