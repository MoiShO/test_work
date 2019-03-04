import React from "react";
import Form from "./js/components/form/Form.jsx";
import ShowDetails from "./js/components/showDetails/ShowDetails.jsx"
import ItemList from "./js/components/list/List.jsx"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Swich from "./js/components/switchingLanguage/Switchlanguage.jsx"
import { withTranslation  } from "react-i18next";
import i18next from "i18next";

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}


const Home = () => (
    <div className="row col-sm">
    <div className="col-sm-5 offset-sm-1">
      <h2>{i18next.t('notes')}</h2>
        <ItemList />
    </div>
    <div className="col-sm-5 offset-sm-1">
      <h2>{i18next.t('title-main')}</h2>
      <Form />
    </div>
  </div>
)


const Details = (props) => {
  return (
      <ShowDetails
      id={props.match.params.id} 
      />
  );
}

const App = () => {

    return(
      <BrowserRouter>
        <div>
          <Swich />
          <Link to="/">{i18next.t('nav-home') !== 'nav-home' ? i18next.t('nav-home') : "HOME"}</Link>{' '}
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
