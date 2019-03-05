import React, { Component } from "react";
import ChangeForm from '../changeForm/index'
import i18next from "i18next";

class ButtonDetails extends Component {

  state = {
    showForm: false,
  }

  constructor(props){
    super(props);
    this.handleDel = this.handleDel.bind(this);
    this.handleChange = this.handleChange.bind(this)

  }

  handleDel() {
    const {id, note} = this.props;
    this.routeChange();
    this.props.delArticle({ note, id });
  }

  routeChange() {
    let path = '/';
    this.props.history.push(path);
  }

  handleChange() {
    const showForm = this.state.showForm;
    this.setState({ showForm: !showForm })
  }

  updateData = (value) => {
    this.setState({ showForm: value })
  }
  
  render() {
    let showForm = this.state.showForm;
    return (
        <div className="detail col-sm-12">
          <button className="detail btn_delete btn btn-success btn-sm" onClick={this.handleDel}>{i18next.t('btn-delete')}</button>
          <button className="detail btn_change btn btn-success btn-sm" onClick={this.handleChange}>{i18next.t('btn-change')}</button>
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


export default ButtonDetails;
