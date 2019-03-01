import React, {  } from "react";
import { connect } from "react-redux";
import Button from './delButton.jsx'

const mapStateToProps = state => {
  return { articles: state.articles };
};

export function arcticleFetchData(url) {
  return (dispatch) => {
      dispatch(arcticleIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(arcticleIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(arcticleFetchDataSuccess(items)))
          .catch(() => dispatch(arcticleHasErrored(true)));
  };
}

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