import React, { Component } from "react";
import Form from "./Form.jsx";
import ShowDetails from "./ShowDetails.jsx"
import ItemList from "./ListApi.jsx"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Swich from "./Switch.jsx"
import { withTranslation  } from "react-i18next";
import i18next from "i18next";

const Home = () => (
    <div className="row col-sm">
    <div className="col-sm-5 offset-sm-1">
      <h2>Articles</h2>
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

class ConnectApp extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Swich />
          <Link to="/">Home</Link>{' '}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path={`/:id`} component={Details} />
              <Route exact render={() => <h1>Page not found</h1>} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// const App = connect(null, mapDispatchToProps)(ConnectApp);

export default withTranslation()(ConnectApp);