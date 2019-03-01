import React, { Component } from "react";
import { connect } from "react-redux";
import Button from './delButton.jsx'

const mapStateToProps = state => {
  return { articles: state.articles };
};


const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
    <li className="list-group-item" key={el.id}>
        {el.title}
    <Button
      title={el.title}
      id={el.id}>
      Del
    </Button>
    </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;