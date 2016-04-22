import React, { Component } from 'react'
import img from '../style/react.png';

export default class NavHeader extends Component {
  render() {
    return (
  			<nav className="navbar navbar-default">
	        <div className="container-fluid">
	          <div className="navbar-header">
	            <a className="navbar-brand " href="#">
	              <img 
	              	alt="Brand" 
	              	className="brand-logo"
	              	src={img} />
	            </a>
	          </div>
	        </div>
      	</nav> 
      	);
  }
}