import React, { Component } from "react";

class Alert extends Component {
    render() {
        const message = this.props.message
        const alert = {
            color: 'red',
        }
        return ( 
            <div> 
            {message ?
                <h3 style={alert}>{message}</h3> : null
            }
            </div>
        )
    }
}

export default Alert