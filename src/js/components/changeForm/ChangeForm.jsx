import React, { Component } from "react";
import Alert from "../alert/Alert.jsx"
import i18next from "i18next";


class ConnectedChangeForm extends Component {

  constructor() {
      super();
      this.state = {
      title: "",
      message: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    const { id } = this.props
    const { title } = this.state;
    console.log(this.props)
    if(title) {
        this.props.changeArticle({ title, id });
        this.props.updateData(this.state.name)
    }
    else {
        this.setState({ message: true })
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        { this.state.message ? 
          <Alert message={i18next.t('alert')}/> 
          : null
        }
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
    );
  }
}

export default ConnectedChangeForm;
