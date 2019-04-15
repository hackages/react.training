import React, { Component } from 'react';
import './forms.css';

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Intro to Formik</h1>
        <div
          className="container"
          style={{
            display: 'block',
            width: 400,
            border: '1px solid grey',
            padding: 10
          }}
        >
          <form>
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value=""
            />
            <button type="submit">Submit</button>
            <button type="button" className="outline">
              Reset
            </button>
          </form>
        </div>
      </>
    );
  }
}
