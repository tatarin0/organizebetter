import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import NavHeader from './NavHeader';
import '../style/master.css';

export default class App extends Component {
  render() {
    return (
    <div>
      <NavHeader />

      <div className="container">
        <h2>React voting list</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
      </div>

      </div>
    )
  }
}
