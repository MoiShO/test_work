/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react'
import i18next from 'i18next';
import { inject, PropTypes as mobxPropTypes  } from 'mobx-react';
import PropTypes from 'prop-types';
import Alert from '../alert/Alert';
import stores from '../../store';

@inject('listStore', 'changeFormStore')
class ConnectedChangeForm extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      message: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  async handleSubmit (event) {
    event.preventDefault()

    const { id, changeFormStore, listStore, updateShowForm } = this.props
    const { title } = this.state
    if (title) {
      updateShowForm()
      await changeFormStore.changeArticle({ title, id })
      listStore.changeArticle({ title, id })
    } else {
      this.setState({ message: true })
    }
  }

  render () {
    const { title, message } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        { message ? <Alert message={i18next.t('alert')} /> : null}
        <div className="form-group">
          <label htmlFor="title">{i18next.t('title')}</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          {i18next.t('btn-change')}
        </button>
      </form>
    )
  }
}

ConnectedChangeForm.defaultProps = {
  id: '',
  changeFormStore: stores.changeFormStore,
  listStore: stores.listStore,
  updateShowForm: (() => (undefined)),
};

ConnectedChangeForm.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  changeFormStore:  mobxPropTypes.objectOrObservableObject,
  listStore: mobxPropTypes.objectOrObservableObject,
  updateShowForm: PropTypes.func,
}

export default ConnectedChangeForm
