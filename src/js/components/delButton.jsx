import React, { Component } from "react";
import { connect } from "react-redux";
import { delArticle } from "../actions/index";
import { withRouter } from 'react-router-dom';
import ChangeForm from './ChangeForm.jsx'
import i18next from "i18next";

function mapDispatchToProps(dispatch) {
  return {
    delArticle: article => dispatch(delArticle(article)),
  };
}

class DelButton extends Component {

  state = {
    showForm: false,
  }

  handleDel(id) {
    this.props.delArticle({ id });
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
        <div className="col-sm-12">
          <button className="btn btn-success btn-sm" onClick={this.handleDel.bind(this, id)}>{i18next.t('btn-delete')}</button>
          <button className="btn btn-success btn-sm" onClick={this.routeChange.bind(this, id, title)}>{i18next.t('btn-show-detail')}</button>
          <button className="btn btn-success btn-sm" onClick={this.handleChange.bind(this)}>{i18next.t('btn-change')}</button>
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

const Button = connect(null, mapDispatchToProps)(DelButton);

export default withRouter(Button);
