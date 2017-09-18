import React from 'react';

class Keypad extends React.Component {
  handleInput = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.handleInput}> </input>
    );
  }
}

export default Keypad;
