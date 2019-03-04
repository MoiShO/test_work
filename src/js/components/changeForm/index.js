import { connect } from "react-redux";
import { changeArticle } from "../../actions/index";
import { withTranslation  } from "react-i18next";
import ConnectedChangeForm from "./ChangeForm.jsx"
import "./change-form.css"

function mapDispatchToProps(dispatch) {
    return {
      changeArticle: article => dispatch(changeArticle(article))
    };
  }

const ChangeForm = connect(null, mapDispatchToProps)(ConnectedChangeForm);

export default withTranslation()(ChangeForm)