import React, { Component } from 'react'
import Alert from '../alert/index'
import i18next from 'i18next'

class ConnectedForm extends Component {
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

  handleSubmit (event) {
    event.preventDefault()
    const { title } = this.state
    if (title) {
      this.props.addArticle({ title })
      this.setState({ title: '' })
      this.setState({ message: false })
    } else {
      this.setState({ message: true })
    }
  }

  render () {
    const { title } = this.state
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        { this.state.message ? <Alert message={i18next.t('alert')}/> : null
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

export default ConnectedForm
