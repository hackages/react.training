import React, { Component } from 'react';
import './forms.css';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .max(10)
    .min(3)
    .required()
});
export default class App extends Component {
  state = {
    email: 'd@d.io'
  };
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
          <Formik
            initialValues={{ email: this.state.email }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              setTimeout(() => actions.setSubmitting(false), 3000);
              console.log(actions);
            }}
          >
            {props => {
              const { handleChange, values, errors, handleSubmit } = props;

              return (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" style={{ display: 'block' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    onChange={handleChange('email')}
                    value={values.email}
                  />
                  <div>{errors.email && 'Email is required'}</div>

                  <pre>'Touched' {JSON.stringify(props.touched)}</pre>
                  <pre>'errors' {JSON.stringify(props.errors)}</pre>
                  <pre>'Dirty' {JSON.stringify(props.dirty)}</pre>
                  <pre>'isSubmitting' {JSON.stringify(props.isSubmitting)}</pre>
                  <pre>'isValid' {JSON.stringify(props.isValid)}</pre>

                  <button type="submit" disabled={!props.isValid}>
                    Submit
                  </button>
                  <button type="button" className="outline">
                    Reset
                  </button>

                  <div>
                    {props.isSubmitting && '.........submitting.........'}
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </>
    );
  }
}
