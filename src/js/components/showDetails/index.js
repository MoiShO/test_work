import { connect } from "react-redux";
import { delArticle } from "../../actions/index";
// import { withRouter } from 'react-router-dom';
import ConnectedDetails from "./ShowDetails.jsx";
import "./show-details-style.css";

function mapDispatchToProps(dispatch) {
    return {
      delArticle: article => dispatch(delArticle(article)),
    };
}

  
const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};


const Details = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetails);

export default Details
// export default withRouter()(Details)