import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../actions/index";
import Alert from "../alert/index"
import i18next from "i18next";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: items => dispatch(addArticle(items))
  };
}

class ConnectedForm extends Component {

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
    event.preventDefault();
    const { title } = this.state;
    if(title){
      this.props.addArticle({title});
      this.setState({ title: "" });
      this.setState({ message: false })
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
        <button type="submit" className="btn btn-success btn-sl">
         {i18next.t('btn-create')}
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
