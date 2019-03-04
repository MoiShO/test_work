import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleFetchData } from '../../actions/index';
import Button from '../delButton/DelButton.jsx'


class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.title}
                        <Button
                        title={item.title}
                        id={item.id}>
                        </Button>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.arcticleHasErrored,
        isLoading: state.arcticleIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(articleFetchData(url))
    };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default List;