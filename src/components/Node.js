import React, { Component } from 'react';

class Node extends Component{
  constructor() {
    super();
    this.value = null;
    this.childrenObj = {};
    this.isAWord = false;
    this.weight = 0;
  }
}

module.exports = Node;