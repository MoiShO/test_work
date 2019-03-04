import React, { Component } from 'react';

import Button from '../delButton/index'


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
            <ul className="notes_list">
                {this.props.items.map((item) => (
                    <li key={item.id} className="notes_list note">
                        {item.title}

                        <hr className="notes_list separator" />

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



export default ItemList;