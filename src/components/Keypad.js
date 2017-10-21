import React from 'react';

export default class  Keypad extends React.Component {
  keyUpListener = () => {
    console.log('Entering password...');
  }
  render() {
    return(
      <input type="password" onKeyUp={this.keyUpListener} />
    );
  }
}
