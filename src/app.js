// src/app.js

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoListContainer } from './components/TodoListContainer';
import reducer from './reducers/reducers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('app')
);
