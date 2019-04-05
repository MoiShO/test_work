import React, { Component } from 'react';
import i18next from 'i18next';
import { inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import ChangeForm from '../changeForm/index';
import stores from '../../store';

@inject('delButtonStore', 'changeFormStore', 'listStore', 'routing')
class ButtonDetails extends Component {

  state = {
    showForm: false,
  }

  constructor(props){
    super(props);
    this.handleDel = this.handleDel.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  async handleDel() {
    const { id, delButtonStore, listStore} = this.props;
    this.routeChange();
    await delButtonStore.delArticle({ id });
    listStore.delListNote({ id })
  }

  routeChange() {
    const { routing } = this.props
    let path = '/';
    return routing.history.push(path);
  }

  handleChange() {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm })
  }

  render() {
    const { showForm } = this.state;
    const {id} = this.props
    return (
      <div className="detail col-sm-12">
        <button type="button" className="detail btn_delete btn btn-success btn-sm" onClick={this.handleDel}>{i18next.t('btn-delete')}</button>
        <button type="button" className="detail btn_change btn btn-success btn-sm" onClick={this.handleChange}>{i18next.t('btn-change')}</button>
        {showForm ? <ChangeForm updateShowForm={this.handleChange} id={id} /> : null
        }
      </div>
    );
  }
}

ButtonDetails.defaultProps = {
  id: '',
  routing: stores.routing,
  delButtonStore: stores.delButtonStore,
  listStore: stores.listStore,
};

ButtonDetails.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  routing: mobxPropTypes.objectOrObservableObject,
  delButtonStore: mobxPropTypes.objectOrObservableObject,
  listStore: mobxPropTypes.objectOrObservableObject,
}


export default ButtonDetails;
