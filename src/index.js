import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import appStore from './store/index.js'
import App from './components/App';

console.log(appStore);
ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
