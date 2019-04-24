import React, { useState } from 'react';

function Counter() {
  const [state, setState] = useState({ count: 0, amount: 100 });
  const amount = 1;

  console.log(state);
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => decrement(amount)}>-</button>
      <button onClick={() => increment(amount)}>+</button>
    </div>
  );

  function increment(amount) {
    setState({ ...state, count: state.count + amount });
  }
  function decrement(amount) {
    setState({ ...state, count: state.count - amount });
  }
}
// class Counter extends Component {
//   state = { count: 0 };
//   increment = amount => {
//     // increment
//     this.setState({ count: this.state.count + amount });
//   };
//   decrement = amount => {
//     // decrement
//     this.setState({ count: this.state.count - amount });
//   };
//   render() {
//     const amount = 1;
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button onClick={() => this.decrement(amount)}>-</button>
//         <button onClick={() => this.increment(amount)}>+</button>
//       </div>
//     );
//   }
// }
export default Counter;
