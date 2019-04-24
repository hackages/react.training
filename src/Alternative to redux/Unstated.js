import React, { useState } from 'react';
import { Container, Subscribe, Provider } from 'unstated';

class CounterContainer extends Container {
  state = {
    count: 0
  };

  increment(step) {
    // increment
    console.log(step);
    this.setState({ count: this.state.count + step });
  }

  decrement = step => {
    // decrement
    this.setState({ count: this.state.count - step });
  };
}

function Counter() {
  const amount = 1;
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => {
        return (
          <div>
            <span>{counter.state.count}</span>
            <button onClick={() => counter.decrement(amount)}>-</button>
            <button onClick={() => counter.increment(amount)}>+</button>
          </div>
        );
      }}
    </Subscribe>
  );
}

export default () => (
  <Provider>
    <Counter />
  </Provider>
);
