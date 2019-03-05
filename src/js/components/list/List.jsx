import React, { Component } from 'react';
import Button from '../delButton/index'
import Preloder from '../../../preloader/25.gif'

class ItemList extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  defaultClass(data) {
    if(!data.id) {
      return `notes_list note ${data}`
    }
    else {
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
        return <img src={Preloder} alt="loading..." />;
      }

      return (
        <div>
            <ul className="notes_list">
              {this.props.items.map((item) => (
                <li key={item.id}  className="notes_list note">
                  {Number(item.id) === Number(this.props.isDeleted.id) ? <img src={Preloder} alt="loading..." /> :  item.title}
        
                  <hr className="notes_list separator" />

                  {Number(item.id) === Number(this.props.isDeleted.id) ? 
                    null :
                    <Button
                      title={item.title}
                      id={item.id}>
                    </Button>
                  }
                </li>
              ))}
            </ul>
        </div>
      );
  }
}

export default ItemList;
