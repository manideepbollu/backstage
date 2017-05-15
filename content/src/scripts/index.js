import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

const proxyStore = new Store({portName: 'bs-port'});

const popup = document.createElement('div');
popup.id = 'bs-container';

document.body.insertBefore(popup, document.body.childNodes[0]);

render(
  <Provider store={proxyStore}>
    <App/>
  </Provider>
  , document.getElementById('bs-container'));
