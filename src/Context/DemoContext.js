import React, { createContext, useContext, useState } from 'react';

const AmountContext = createContext(0);

// export class Counter extends Component {
//   static contextType = AmountContext;
//   state = { count: 0 };
//   increment = amount => {
//     // increment
//     this.setState({ count: this.state.count + amount });
//   };
//   decrement = amount => {
//     // decrement
//     this.setState({ count: this.state.count - amount });
//   };
function Counter() {
  const [state, setState] = useState({ count: 0 });
  const amount = useContext(AmountContext);
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => decrement(amount)}>-</button>
      <button onClick={() => increment(amount)}>+</button>
    </div>
  );

  function increment(amount) {
    // increment
    setState({ count: state.count + amount });
  }
  function decrement(amount) {
    // decrement
    setState({ count: state.count - amount });
  }
}

function AmountAdjuster({ children }) {
  const [state, setState] = useState({ amount: 0 });
  const handleChange = event => {
    setState({
      ...state,
      amount: parseInt(event.currentTarget.value, 10)
    });
  };
  return (
    <AmountContext.Provider value={state.amount}>
      <div>
        {children}
        <input type="number" value={state.amount} onChange={handleChange} />
      </div>
    </AmountContext.Provider>
  );
}

export default () => (
  <AmountAdjuster>
    <Counter />
  </AmountAdjuster>
);
