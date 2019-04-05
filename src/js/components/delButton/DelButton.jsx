import React, { Component } from "react";
import i18next from 'i18next';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import ChangeForm from '../changeForm/index';
import stores from '../../store';

@inject('listStore', 'delButtonStore', 'routing')
@observer
class DelButton extends Component {

  constructor (props){
    super(props);

    this.state = {
      showForm: false,
    }

    this.handleDel = this.handleDel.bind(this)
    this.routeChange = this.routeChange.bind(this)
    this.handleShowForm = this.handleShowForm.bind(this)
  }

  async handleDel() {
    const { id, delButtonStore, listStore } = this.props;
    await delButtonStore.delArticle({ id });
    listStore.delListNote({ id })
  }

  handleShowForm() {
    const { showForm } = this.state;
    this.setState({showForm : !showForm})

  }

  routeChange() {    
    const { id, routing } = this.props;
    let path = `${id}`;
    return routing.history.push(path);
  }

  render() {
    const { showForm } = this.state
    const { id } = this.props
    return (
      <div className="note btn_all_change col-sm-12">
        <button type="button" className="note btn_delete btn btn-success btn-sm" onClick={this.handleDel}>{i18next.t('btn-delete')}</button>
        <button type="button" className="note btn_show_detail btn btn-success btn-sm" onClick={this.routeChange}>{i18next.t('btn-show-detail')}</button>
        <button type="button" className="note btn_change btn btn-success btn-sm" onClick={this.handleShowForm}>{i18next.t('btn-change')}</button>
        {showForm ? <ChangeForm id={id} updateShowForm={this.handleShowForm} /> : null
        }
      </div>
    );
  }
}

DelButton.defaultProps = {
  id: '',
  delButtonStore: stores.delButtonStore,
  listStore: stores.listStore,
  routing: stores.routing,
};

DelButton.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  delButtonStore:  mobxPropTypes.objectOrObservableObject,
  listStore: mobxPropTypes.objectOrObservableObject,
  routing: mobxPropTypes.objectOrObservableObject,
}

export default DelButton;
