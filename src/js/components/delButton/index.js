import DelButton from "./DelButton.jsx"
import "./del-button-style.css"
import { connect } from "react-redux";
import { delArticle } from "../../actions/index";
import { withRouter } from 'react-router-dom';


function mapDispatchToProps(dispatch) {
    return {
      delArticle: article => dispatch(delArticle(article)),
    };
  }
  
const Button = connect(null, mapDispatchToProps)(DelButton);


export default withRouter(Button)