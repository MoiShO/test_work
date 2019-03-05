import { connect } from "react-redux";
import ConnectedDetails from "./ShowDetails.jsx";
import "./show-details-style.css";
  
const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

const Details = connect(mapStateToProps)(ConnectedDetails);

export default Details