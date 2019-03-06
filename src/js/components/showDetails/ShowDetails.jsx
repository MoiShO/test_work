import React, { Component } from 'react'
import ButtonDetails from '../buttonDetails/index'

class ConnectedDetails extends Component {
  render () {
    const { id, items } = this.props
    const note = items.filter((el) => { if (el.id == id) { return el } })[0]
    return (
      <div>
        <h1>{note ? note.title : null}</h1>
        <ButtonDetails
          id={id}
        />
      </div>
    )
  }
}

export default ConnectedDetails
