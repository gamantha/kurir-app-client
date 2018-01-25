import React from 'react';

import { connect } from 'react-redux';

// Email Validation
export function validateEmail(inputvalue) {
  const pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  return !!pattern.test(inputvalue);
}

// Name Validation
export function validateName(inputvalue) {
  const pattern = /([^a-zA-Z0-9_\ -])/g;
  return !pattern.test(inputvalue);
}

export const connectWithStore = (store, WrappedComponent, ...args) => {
  const ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
};
