import React, { Component } from 'react';

export class Counter extends Component {
  state = { count: 0 };
  increment = amount => {
    // increment
  };
  decrement = amount => {
    // decrement
  };
  render() {
    const amount = 0;
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={() => this.decrement(amount)}>-</button>
        <button onClick={() => this.increment(amount)}>+</button>
      </div>
    );
  }
}

class AmountAdjuster extends React.Component {
  state = { amount: 0 };
  handleChange = event => {
    this.setState({
      amount: parseInt(event.currentTarget.value, 10)
    });
  };
  render() {
    return (
      <div>
        {this.props.children}
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default () => (
  <AmountAdjuster>
    <Counter />
  </AmountAdjuster>
);
