import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers/index';
import App from './App';

const logger = store => next => action =>{
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action); // nie mozemy zgubic wywolania tej akcji wiec trzeba wywolac kolejne middleware

  console.log('next state', store.getState());
  console.groupEnd();

  return result;
}

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);