import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import Product from '../components/Product'
import ProductsList from '../components/ProductsList'

export default class ProductsContainer extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.object
    })).isRequired,
    addToCart: PropTypes.func.isRequired
  }

  render() {
    const { products } = this.props
    return (
      <ProductsList title="Items wanted">
        {products.map(product =>
          <Product
            key={product.id}
            product={product}/>
        )}
      </ProductsList>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
