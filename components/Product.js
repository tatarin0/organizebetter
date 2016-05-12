import React, { Component, PropTypes } from 'react';

export default class Product extends Component {
  static propTypes = {
    products: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.number.isRequired,
      location: PropTypes.object
    }).isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {title, description, location} = this.props.product

    return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{title}</h3>
          </div>
          <div className="panel-body">
            {description} - {location.address1}
          </div>
        </div>
      );
  }
}
