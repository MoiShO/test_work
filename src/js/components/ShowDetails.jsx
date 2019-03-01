import React, { Component } from "react";
import { connect } from "react-redux";
import { delArticle } from "../actions/index";
import { withRouter } from 'react-router-dom';
import ButtonDetails from './ButtonDetails.jsx'

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


class ConnectedDetails extends Component {

    routeChange() {
        let path = '/';
        this.props.history.push(path);
      }

    render() {
        let { id, items } = this.props
        let note = items.filter((el) => {if(el.id == id){return el}})[0]
        return (
            <div>
                <h1>{note.title}</h1>
                <ButtonDetails />
            </div>
        )
    }
}

const Details = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetails);
export default withRouter(Details);