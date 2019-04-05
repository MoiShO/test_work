/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
// import {Provider} from 'mobx-react';
// import stores from './js/store';
import App from './App';
import './js/components/languages/i18n';
// import createBrowserHistory from 'history/createBrowserHistory';
// import {syncHistoryWithStore } from 'mobx-react-router';
// import { Router } from 'react-router'
// import {Route} from 'react-router-dom';

// const browserHistory = createBrowserHistory();
// const history = syncHistoryWithStore(browserHistory, stores.routing);

// render(
//   <Provider {...stores}>
//     <Router history={history}>
//       <Route exact path='/' component={App}/>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )

render(
  // <Provider {...stores}>
  <App />,
  // </Provider>,
  document.getElementById('root')
)
