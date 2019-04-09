/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import i18next from 'i18next';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import Alert from '../alert/index';
import stores from '../../store/index';

@inject('formStore', 'listStore')
@observer
class ConnectedForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      message: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const title = event.target.value;
    this.setState({ title: title })
  }

  async handleSubmit (event) {
    event.preventDefault()
    const { formStore, listStore } = this.props;
    const { title } = this.state
    if (title) {
      this.setState({ title: '' })
      await formStore.addArticle({ title })
      listStore.addListNewNote(formStore.newList)
    } else {
      this.setState({ message: true })
    }
  }

  render () {
    const { title, message } = this.state
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        { message ? <Alert message={i18next.t('alert')} /> : null
        }
        <div className="form form_input form-group">
          <label htmlFor="title">{i18next.t('title')}</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="form btn_create btn btn-success btn-sl">
          {i18next.t('btn-create')}
        </button>
      </form>
    )
  }
}

ConnectedForm.defaultProps = {
  formStore: stores.formStore,
  listStore: stores.listStore,
};

ConnectedForm.propTypes = {
  formStore:  mobxPropTypes.objectOrObservableObject,
  listStore: mobxPropTypes.objectOrObservableObject,
}

export default ConnectedForm
