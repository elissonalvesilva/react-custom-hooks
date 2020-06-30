import React from 'react';
import useCounter from './custom-hooks/useCounter';

// import { Container } from './styles';

function Counter() {

  const [count, increment, decrement] = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </div>
  );
}

export default Counter;