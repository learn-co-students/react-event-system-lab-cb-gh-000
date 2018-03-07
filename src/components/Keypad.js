// Code Keypad Component Here

import React, { Component } from 'react';


class Keypad extends Component {

  message() {
    console.log('Entering password...');
  };

  render() {
    return (
      <input onKeyUp={this.message} type="password" />
    );
  }

}

export default Keypad;
