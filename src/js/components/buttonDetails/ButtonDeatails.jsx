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

const mapStateToProps = state => {
  return { items: state.items };
};

class ButtonDetails extends Component {

  state = {
    showForm: false,
  }

  constructor(props){
    super(props);
    this.handleDel = this.handleDel.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleDel() {
    const id = this.props.id
    const note = this.props.items.filter((el) => el.id == id )[0].title
    this.routeChange()
    this.props.delArticle({ note, id });
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
    return (
        <div className="col-sm-12">
          <button className="btn btn-success btn-sm" onClick={this.handleDel}>{i18next.t('btn-delete')}</button>
          <button className="btn btn-success btn-sm" onClick={this.handleChange}>{i18next.t('btn-change')}</button>
          {showForm ? 
          <ChangeForm 
            updateData={this.updateData}
            id = {this.id}
          /> : null
          }
        </div>
    );
  }
}

const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonDetails);

export default withRouter(Button);
