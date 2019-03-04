import React, { Component } from "react";
import ButtonDetails from '../buttonDetails/index'

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
                <ButtonDetails 
                    id={id}
                    title={note.title}
                />
            </div>
        )
    }
}

export default ConnectedDetails;