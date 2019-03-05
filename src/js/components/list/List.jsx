import React, { Component } from 'react';

import Button from '../delButton/index'


class ItemList extends Component {

    constructor(props){
        super(props);
        this.defaultClass = this.defaultClass.bind(this);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    defaultClass(data) {
        console.log(data)
        if(!data.id) {
            return `notes_list note ${data}`
        }
        else {
            console.log(data)
            return `notes_list ${data.addClass} note ${data.id}`
        }
    }

    updateClass(value) {
        this.defaultClass(value)
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        console.log(this.state)
        return (
            <ul className="notes_list">
                {this.props.items.map((item) => (
                    <li key={item.id} 
                        className={this.defaultClass(item.id)}>
                        {item.title}

                        <hr className="notes_list separator" />

                        <Button
                            updateClass={this.updateClass}
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