import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import Alert from "./Alert.jsx"
import { withTranslation  } from "react-i18next";
import i18next from "i18next";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: items => dispatch(addArticle(items))
  };
}

const mapStateToProps = state => {
  return { items: state.items };
};

class ConnectedForm extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      message: "",
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
      this.setState({ message: "" })
    }
    else {
      this.setState({ message: "Fill in the title" })
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Alert message={this.state.message}/>
        <div className="form-group">
          <label htmlFor="title">Title</label>
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

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default withTranslation()(Form);