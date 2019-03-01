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

class DelButton extends Component {

  state = {
    showForm: false,
  }

  handleDel(title , id) {
    this.props.delArticle({ title, id });
  }

  routeChange(id) {
    let path = `${id}`;
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
    let {title, id} = this.props
    return (
        <div className="col-sm">
          <button className="btn btn-success btn-sm " onClick={this.handleDel.bind(this, title ,id)}>Del</button>
          <button className="btn btn-success btn-sm" onClick={this.routeChange.bind(this, id)}>Show details</button>
          <button className="btn btn-success btn-sm" onClick={this.handleChange.bind(this)}>Change</button>
          {showForm ? 
            <ChangeForm 
            updateData={this.updateData}
            id = {this.props.id}
            /> : null
          }
        </div>
    );
  }
}

const Button = connect(mapStateToProps, mapDispatchToProps)(DelButton);

export default withRouter(Button);