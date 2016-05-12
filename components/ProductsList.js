import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
