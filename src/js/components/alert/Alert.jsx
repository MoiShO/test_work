import React, { Component } from "react";

class Alert extends Component {
    
    render() {
        const message = this.props.message
        return ( 
            <div> 
            {message ?
                <p className="alert-message">{message}</p> : null
            }
            </div>
        )
    }
}

export default Alert