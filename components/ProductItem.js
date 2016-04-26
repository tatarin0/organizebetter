import React, { Component, PropTypes } from 'react'
import ListTree from './ListTree'

export default class ProductItem extends Component {
  render() {
    let data = {
        root: {
            title: 'im root',
            price: this.props.price,
            summary: 'this is summary parent',
            location: 'kiss',
            child: {
              title: 'im child',
              price: this.props.price,
              summary: 'this is summary child',
              location: 'orl'
            }
          }
        }

    return (
      <div style={{ marginBottom: 20 }} className="container product-item">
        <ListTree data={ data } />
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}
