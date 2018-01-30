// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
  automatedMessage() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.automatedMessage} />
      </div>
    );
  }
}

export default Keypad;