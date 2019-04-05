import React from 'react';
import {  Switch, Route, Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import {Provider} from 'mobx-react';
import {syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history';
import Form from './js/components/form/index';
import ShowDetails from './js/components/showDetails/index';
import ItemList from './js/components/list/index';
import SwitchLanguage from './js/components/switchingLanguage/index';
import stores from './js/store';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routing);


const HomeComp = () => (
  <div className="row col-sm">
    <div className="home_page col-sm-5 offset-sm-1">
      <p className="home_page article_list">{i18next.t('notes')}</p>
      <ItemList />
    </div>

    <div className="col-sm-5 offset-sm-1">
      <p className="home_page article_add">{i18next.t('title-main')}</p>
      <Form />
    </div>
  </div>
)

const Details = (value) => {
  const { id } = value.match.params
  return (
    <div className="col-sm-5 offset-sm-1">
      <ShowDetails
        id={id}
      />
    </div>
  )
}

const App = () => {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <div className="row">
          <Link className="col-sm-1 home offset-sm-1 link_homepage" to="/">{i18next.t('nav-home') !== 'nav-home' ? i18next.t('nav-home') : 'HOME'}</Link>
          <SwitchLanguage />
          <Switch>
            <Route exact path="/" component={HomeComp} />
            <Route path="/:id" component={Details} />
            <Route exact render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default withTranslation()(App)
