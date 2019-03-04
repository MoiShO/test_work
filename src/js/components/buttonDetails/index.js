import { connect } from "react-redux";
import { delArticle } from "../../actions/index";
import { withRouter } from "react-router-dom";
import ButtonDetails from "./ButtonDeatails.jsx"

function mapDispatchToProps(dispatch) {
    return {
      delArticle: article => dispatch(delArticle(article)),
    };
}
  
const mapStateToProps = state => {
    return { items: state.items };
};

const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonDetails);

export default withRouter(Button)