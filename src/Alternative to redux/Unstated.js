import React from 'react';
import { Container } from 'unstated';

class CounterContainer extends Container {
  state = {
    count: 0
  };

  increment(step) {
    // increment
  }

  decrement = step => {
    // decrement
  };
}

function Counter() {
  const counter = {};
  return (
    <div>
      <button onClick={() => counter.decrement()}>-</button>
      <span>{counter.state.count}</span>
      <button onClick={() => counter.increment()}>+</button>
    </div>
  );
}

export default <Counter />;
