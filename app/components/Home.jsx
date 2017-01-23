import React from 'react';
import store from '../store';
import {testOrderRoute} from '../reducers/cart';

export default () => (
  <div>
    <h1 className="text-center">
      Welcome to Grace Potter!
    </h1>
    <div className="text-center">
      <button type="button" className="btn btn-default" onClick={() => store.dispatch(testOrderRoute())}>
        Test Order Route
      </button>
    </div>
  </div>
);