import React from "react";
// import ReactDOM from "react-dom";
import Input from "./js/components/presentational/Input.jsx";
import Main from "./js/components/details/index.jsx"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import index from "./js/index"

const Home = () => <h1>Home</h1>;
const Details = () => <h1>Details</h1>;

class App extends React.Component {

  state = {
      id: '',
  }  

  changeId = (event) => {
      this.setState({ id: event.target.value }) 
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to={{pathname: '/details'}}>Details</Link>{' '}
            <Switch>
              <Route exact path="/" component={index} />
              <Route exact path="/details" component={Details} />
              <Route exact render={() => <h1>Page not found</h1>} />
            </Switch>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;