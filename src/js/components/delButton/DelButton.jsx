import React, { Component } from "react";
import { connect } from "react-redux";
import { delArticle } from "../../actions/index";
import { withRouter } from 'react-router-dom';
import ChangeForm from '../changeForm/ChangeForm.jsx'
import i18next from "i18next";

function mapDispatchToProps(dispatch) {
  return {
    delArticle: article => dispatch(delArticle(article)),
  };
}

class DelButton extends Component {

  constructor (props){
    super(props);

    this.handleDel = this.handleDel.bind(this)
    this.routeChange = this.routeChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    showForm: false,
  }

  handleDel() {
    const { id } = this.props
    this.props.delArticle({ id });
  }

  routeChange() {
    const { id } = this.props
    let path = `${id}`;
    return this.props.history.push(path);
  }

  handleChange() {
    const showForm = this.state.showForm
    this.setState({ showForm: !showForm })
  }

  updateData = (value) => {
    this.setState({ showForm: value })
  }
  
  render() {
    return (
        <div className="col-sm-12">
          <button className="btn btn-success btn-sm" onClick={this.handleDel}>{i18next.t('btn-delete')}</button>
          <button className="btn btn-success btn-sm" onClick={this.routeChange}>{i18next.t('btn-show-detail')}</button>
          <button className="btn btn-success btn-sm" onClick={this.handleChange}>{i18next.t('btn-change')}</button>
          {this.state.showForm ? 
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