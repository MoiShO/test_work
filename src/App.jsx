import React from "react";
import Form from "./js/components/form/index";
import ShowDetails from "./js/components/showDetails/index"
import ItemList from "./js/components/list/index"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SwitchLanguage from "./js/components/switchingLanguage/index"
import { withTranslation  } from "react-i18next";
import i18next from "i18next";
import "./App.css"

const Home = () => (

  <div className="row col-sm">
    <div className="home_page col-sm-5 offset-sm-1">
      <p className="home_page article_list" >{i18next.t('notes')}</p>
        <ItemList />
    </div>

    <div className="col-sm-5 offset-sm-1">
      <p className="home_page article_add" >{i18next.t('title-main')}</p>
        <Form />
    </div>
  </div>
)


const Details = (props) => {
  return (
    <div className="col-sm-5 offset-sm-1">
      <ShowDetails
        id={props.match.params.id}
      />
    </div>
  );
}

const App = () => {
  return(
    <BrowserRouter>
      <div className="row">
      <Link className="col-sm-1 home offset-sm-1 link_homepage" to="/">{i18next.t('nav-home') !== 'nav-home' ? i18next.t('nav-home') : "HOME"}</Link>{' '}
        <SwitchLanguage />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/:id`} component={Details} />
            <Route exact render={() => <h1>Page not found</h1>} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}


export default withTranslation()(App);
