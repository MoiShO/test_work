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

const mapStateToProps = state => {
    return { articles: state.articles };
  };

class ConnectedDetails extends Component {

    routeChange() {
        let path = '/';
        this.props.history.push(path);
      }

    render() {
        let { id , articles} = this.props
        let bookmarks = articles[id]
        console.log(bookmarks)
        return (
            <div>
                <h1> {bookmarks.title}</h1>
                <ButtonDetails />
            </div>
        )
    }
}

const Details = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetails);
export default withRouter(Details);