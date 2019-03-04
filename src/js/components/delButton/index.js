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

function mapStateToProps(state) {
    return {
        loading: state,
        hasDeleted: state.arcticleIsDeleted,
    };
}
  
const Button = connect(mapStateToProps, mapDispatchToProps)(DelButton);


export default withRouter(Button)
