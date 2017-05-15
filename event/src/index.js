import { createStore } from 'redux';
import rootReducer from './reducers';

import { wrapStore } from 'react-chrome-redux';

const store = createStore(rootReducer);

wrapStore(store, {
  portName: 'bs-port'
});

chrome.browserAction.onClicked.addListener(function (tab) {
  store.dispatch({
    type: 'CLICKED'
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != 'chrome://newtab/') {
      store.dispatch({
        type: 'TAB_UPDATED',
        payload: tab
      });
  }
});

chrome.tabs.onHighlightChanged.addListener((selectInfo) => {
    store.dispatch({
      type: 'RESET'
    });
});

// Future Implementation
// chrome.history.onVisited.addListener((result) => {
//   alert(result.id + " " + result.visitCount);
// });


