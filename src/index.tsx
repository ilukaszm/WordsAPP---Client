import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Root } from 'views';
import store from 'data/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  rootElement,
);
