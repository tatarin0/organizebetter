import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const { price, quantity, title } = this.props
    return (
    		<div className="pull-left">
    			{title} - &#36;{price} {quantity ? `x ${quantity}` : null} 
    		</div>
    	);
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}
