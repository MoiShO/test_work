import { connect } from "react-redux";
import { addArticle } from "../../actions/index";
import ConnectedForm from "./Form.jsx"
import "./form-style.css"


function mapDispatchToProps(dispatch) {
    return {
      addArticle: items => dispatch(addArticle(items))
    };
  }

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form