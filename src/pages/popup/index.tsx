import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { Provider } from 'react-redux';
import store from '@src/store/store';
import '@src/styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';

refreshOnUpdate('pages/popup');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  root.render(
    <Provider store={store}>
      <Popup />
    </Provider>,
  );
}

init();
