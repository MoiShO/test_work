import React, { Component } from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import ShowDetails from "./ShowDetails.jsx"
import { connect } from "react-redux";
import ItemList from "./ListApi.jsx"

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Home = () => (
    <div className="row col-sm">
    <div className="col-sm-5 offset-sm-1">
      <h2>Articles</h2>
        <ItemList />
    </div>
    <div className="col-sm-5 offset-sm-1">
      <h2>Add a new article</h2>
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

const mapStateToProps = state => {
  return { redirect: state.redirect,  articles: state.articles };
};


class ConnectApp extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
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

const App = connect(mapStateToProps)(ConnectApp);

export default App;