import React from 'react'

class Alert extends React.Component {
  render () {
    const message = this.props.message
    return (
      <div> { message ? <p className="form alert_message"> {message} </p> : null } </div>
    )
  }
}

export default Alert
