import React, { Component } from "react";
import { connect } from "react-redux";
import { delArticle } from "../actions/index";
import { withRouter } from 'react-router-dom';
import ChangeForm from './ChangeForm.jsx'

function mapDispatchToProps(dispatch) {
  return {
    delArticle: article => dispatch(delArticle(article)),
  };
}

const mapStateToProps = state => {
  return { redirect: state.redirect , articles: state.articles };
};

class ButtonDetails extends Component {

  state = {
    showForm: false,
  }

  handleDel(title , id) {
    this.routeChange()
    this.props.delArticle({ title, id });
  }

  routeChange() {
    let path = '/';
    this.props.history.push(path);
  }

  handleChange() {
    const showForm = this.state.showForm
    this.setState({ showForm: !showForm })
  }

  updateData = (value) => {
    this.setState({ showForm: value })
  }
  
  render() {
    let showForm = this.state.showForm
    const id = this.props.match.params.id
    const title = this.props.articles[id].title
    return (
        <div col-sm>
          <button class="btn btn-success btn-lg" onClick={this.handleDel.bind(this, title ,id)}>Del</button>
          <button class="btn btn-success btn-lg" onClick={this.handleChange.bind(this)}>Change</button>
          {showForm ? 
          <ChangeForm 
          updateData={this.updateData}
          id = {id}
          /> : null
          }
        </div>
    );
  }
}

const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonDetails);

export default withRouter(Button);