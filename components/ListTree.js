import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class ListTree extends Component {

  constructor(props) {
    super(props);

    this.elements = [];
    this.getItem(this.props.data);
  }

  getItem(data) {    
    for (var prop in data) {
      if(data[prop] instanceof Array || data[prop] instanceof Object){
        this.elements.push(data[prop])
        this.getItem(data[prop])
      }
    }
  }

  renderListTree() {
    let list = null;

    for(let i in this.elements){
      //
    }


    return ;
    
  }

  render() {
    return ( <div> { this.renderListTree() } </div>);
  }
}
