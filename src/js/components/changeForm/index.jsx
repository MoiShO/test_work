import React, { Component } from "react";
import { connect } from "react-redux";
import { changeArticle } from "../../actions/index";
import Alert from "../alert/index.jsx"
import { withTranslation  } from "react-i18next";
import i18next from "i18next";

function mapDispatchToProps(dispatch) {
  return {
    changeArticle: article => dispatch(changeArticle(article))
  };
}

class ConnectedChangeForm extends Component {

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
    const { id } = this.props
    const { title } = this.state;
    if(title) {
        this.props.changeArticle({ title, id });
        this.props.updateData(this.state.name)
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

const ChangeForm = connect(null, mapDispatchToProps)(ConnectedChangeForm);
export default withTranslation()(ChangeForm);
